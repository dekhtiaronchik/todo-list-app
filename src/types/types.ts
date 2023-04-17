export enum TaskPriority {
    HIGH = 'High',
    MEDIUM = 'Medium',
    LOW = 'Low'
}

export enum TaskStatus {
    DONE = 'Done',
    IN_PROGRESS = 'In progress',
    TO_DO = 'To do'
}

export interface ITask {
    id: string;
    title: string;
    descriprion?: string;
    dueDate: Date;
    priority: TaskPriority;
    status: TaskStatus;
}