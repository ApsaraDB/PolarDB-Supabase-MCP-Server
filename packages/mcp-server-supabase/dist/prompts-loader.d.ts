interface PromptEntry {
    id: string;
    name: string;
    description: string;
    content: string;
}
interface LoadedPrompt {
    name: string;
    description: string;
    content: string;
}
declare class PromptsProvider {
    /**
     * 加载所有提示词文件
     */
    getAllPrompts(): Promise<LoadedPrompt[]>;
    /**
     * 根据文件名和内容生成资源对象
     */
    private fromEntry;
}
declare const promptsProvider: PromptsProvider;

export { type LoadedPrompt, type PromptEntry, PromptsProvider, promptsProvider };
