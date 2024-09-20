import { defineStore } from "pinia";

export const useMemoriesStore = defineStore("memories", {
    state: () => ({
        memories: [
            {
              id: 1,
              title: "Chat",
              image: "https://picsum.photos/350",
              description:
                "A memorable conversation with friends that changed perspectives.",
            },
            {
              id: 2,
              title: "Bishwa",
              image: "https://picsum.photos/350",
              description: "Precious memories with Bishwa from school days.",
            },
            {
              id: 3,
              title: "Memory",
              image: "https://picsum.photos/350",
              description:
                "A reflective moment, cherishing life’s milestones and events.",
            },
            {
              id: 4,
              title: "Sanchai",
              image: "https://picsum.photos/350",
              description: "Memories saved from important events over the years.",
            },
            {
              id: 5,
              title: "Apple",
              image: "https://picsum.photos/350",
              description:
                "Experiences involving Apple products and key moments in tech.",
            },
          ],
    }),
    getters: {
        getMemories(state) {
            return state.memories;
        },
        getMemory(state) {
            return (id: number) => state.memories.find((memory) => memory.id === id);
        },
    }
});