export interface IArticle {
    author: {
        firstName: string;
        lastName: string;
        id: string;
        username: string;
    };
    _id: string;
    title: string;
    description: string;
    content: string;
    createdTime: string; 
    topics: string[];
    visibility: 'public' | 'private'; 
}

// "article": {
//             "title": "Advanced Techniques in Angular",
//             "description": "A comprehensive tutorial for TypeScript developers to master advanced Angular features.",
//             "content": "Learn about advanced Angular features like lazy loading, reactive forms, custom directives, and state management to enhance your application development.",
//             "author": {
//                 "firstName": "Abdulazim",
//                 "lastName": "Rabie",
//                 "id": "66d0cbc0c83bcb20967113ff",
//                 "username": "abdulazim"
//             },
//             "createdTime": "2024-08-29T19:32:05.627Z",
//             "topics": [
//                 "frontend",
//                 "typescript",
//                 "angular",
//                 "advanced"
//             ],
//             "visibility": "public",
//             "_id": "66d0ccb5c83bcb2096711405",
//             "__v": 0
//         }