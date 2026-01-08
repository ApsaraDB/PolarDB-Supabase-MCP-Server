import { describe, expect, test, beforeEach, vi } from 'vitest';
import { PolarDBPlatform } from './polardb-platform.js';
import type { CreateSecretsOptions } from './types.js';

// Mock fetch
global.fetch = vi.fn();

describe('PolarDBPlatform Authentication', () => {
  let platform: PolarDBPlatform;
  
  const mockApiUrl = 'http://localhost:8080';
  const mockServiceKey = 'test-service-key';
  const mockAnonKey = 'test-anon-key';
  const mockUsername = 'test-user';
  const mockPassword = 'test-pass';

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('getAuthHeaders - Basic Auth Priority', () => {
    test('应该使用 Basic Auth 当提供 Dashboard 认证时', async () => {
      platform = new PolarDBPlatform({
        apiUrl: mockApiUrl,
        serviceRoleKey: mockServiceKey,
        anonKey: mockAnonKey,
        dashboardUsername: mockUsername,
        dashboardPassword: mockPassword,
      });

      // Mock fetch 响应
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => [],
      });

      await platform.listSecrets('default');

      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/secrets'),
        expect.objectContaining({
          headers: expect.objectContaining({
            Authorization: expect.stringMatching(/^Basic /),
          }),
        })
      );
    });

    test('应该使用 Bearer Auth 当未提供 Dashboard 认证时', async () => {
      platform = new PolarDBPlatform({
        apiUrl: mockApiUrl,
        serviceRoleKey: mockServiceKey,
        anonKey: mockAnonKey,
      });

      // Mock fetch 响应
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => [],
      });

      await platform.listSecrets('default');

      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/secrets'),
        expect.objectContaining({
          headers: expect.objectContaining({
            Authorization: expect.stringMatching(/^Bearer /),
            apikey: mockServiceKey,
          }),
        })
      );
    });
  });

  describe('Edge Functions', () => {
    test('listEdgeFunctions 应该使用正确的认证', async () => {
      platform = new PolarDBPlatform({
        apiUrl: mockApiUrl,
        serviceRoleKey: mockServiceKey,
        anonKey: mockAnonKey,
      });

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => [
          {
            slug: 'hello',
            name: 'hello',
            status: 'active',
            version: 1,
          },
        ],
      });

      const result = await platform.listEdgeFunctions('default');

      expect(result).toHaveLength(1);
      expect(result[0].slug).toBe('hello');
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/functions'),
        expect.objectContaining({
          headers: expect.objectContaining({
            Authorization: expect.stringMatching(/^Bearer /),
          }),
        })
      );
    });

    test('getEdgeFunction 应该返回函数详情', async () => {
      platform = new PolarDBPlatform({
        apiUrl: mockApiUrl,
        serviceRoleKey: mockServiceKey,
        anonKey: mockAnonKey,
      });

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          slug: 'hello',
          name: 'hello',
          status: 'active',
          version: 1,
          files: [],
        }),
      });

      const result = await platform.getEdgeFunction('default', 'hello');

      expect(result.slug).toBe('hello');
      expect(result.files).toEqual([]);
    });
  });

  describe('Secrets Management', () => {
    test('listSecrets 应该返回 secrets 列表', async () => {
      platform = new PolarDBPlatform({
        apiUrl: mockApiUrl,
        serviceRoleKey: mockServiceKey,
        anonKey: mockAnonKey,
      });

      const mockSecrets = [
        { name: 'API_KEY', value: 'encrypted-value-1', updated_at: '2024-01-01' },
        { name: 'DB_URL', value: 'encrypted-value-2', updated_at: null },
      ];

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockSecrets,
      });

      const result = await platform.listSecrets('default');

      expect(result).toHaveLength(2);
      expect(result[0].name).toBe('API_KEY');
      expect(result[1].updated_at).toBeNull();
    });

    test('createSecrets 应该创建新的 secrets', async () => {
      platform = new PolarDBPlatform({
        apiUrl: mockApiUrl,
        serviceRoleKey: mockServiceKey,
        anonKey: mockAnonKey,
        dashboardUsername: mockUsername,
        dashboardPassword: mockPassword,
      });

      const secretsToCreate: CreateSecretsOptions = [
        { name: 'NEW_SECRET', value: 'secret-value' },
      ];

      const mockResponse = [
        { name: 'NEW_SECRET', value: 'encrypted-hash', updated_at: '2024-01-01' },
      ];

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      const result = await platform.createSecrets('default', secretsToCreate);

      expect(result).toHaveLength(1);
      expect(result[0].name).toBe('NEW_SECRET');
      
      // 验证使用了 Basic Auth
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/secrets'),
        expect.objectContaining({
          method: 'POST',
          headers: expect.objectContaining({
            Authorization: expect.stringMatching(/^Basic /),
          }),
          body: JSON.stringify(secretsToCreate),
        })
      );
    });

    test('deleteSecrets 应该删除指定的 secrets', async () => {
      platform = new PolarDBPlatform({
        apiUrl: mockApiUrl,
        serviceRoleKey: mockServiceKey,
        anonKey: mockAnonKey,
      });

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        text: async () => '{"message":"Secrets deleted successfully"}',
      });

      await platform.deleteSecrets('default', ['OLD_SECRET']);

      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/secrets'),
        expect.objectContaining({
          method: 'DELETE',
          body: JSON.stringify(['OLD_SECRET']),
        })
      );
    });

    test('应该处理 API 错误', async () => {
      platform = new PolarDBPlatform({
        apiUrl: mockApiUrl,
        serviceRoleKey: mockServiceKey,
        anonKey: mockAnonKey,
      });

      (global.fetch as any).mockResolvedValueOnce({
        ok: false,
        status: 401,
        text: async () => 'Unauthorized',
      });

      await expect(platform.listSecrets('default')).rejects.toThrow(
        'Failed to list secrets'
      );
    });
  });

  describe('TypeScript Types Generation', () => {
    test('generateTypescriptTypes 应该支持两种认证方式', async () => {
      // 测试使用 Service Role Key
      const platformWithServiceKey = new PolarDBPlatform({
        apiUrl: mockApiUrl,
        serviceRoleKey: mockServiceKey,
        anonKey: mockAnonKey,
      });

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ types: 'export interface User { id: string; }' }),
      });

      const result1 = await platformWithServiceKey.generateTypescriptTypes('default');
      expect(result1.types).toContain('export interface User');

      // 测试使用 Dashboard 认证
      const platformWithDashboard = new PolarDBPlatform({
        apiUrl: mockApiUrl,
        serviceRoleKey: mockServiceKey,
        anonKey: mockAnonKey,
        dashboardUsername: mockUsername,
        dashboardPassword: mockPassword,
      });

      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => 'export interface Post { id: string; }',
      });

      const result2 = await platformWithDashboard.generateTypescriptTypes('default');
      expect(result2.types).toContain('export interface Post');
    });
  });
});

