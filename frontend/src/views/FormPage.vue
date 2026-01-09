<template>
    <div class="bg-gray-50 min-h-screen p-8">
        <h1 class="text-2xl font-bold mb-4">Formulaire de Questions</h1>
        <form @submit.prevent="submit">
            <fieldset v-for="theme in themes" :key="theme.name" class="bg-white border-2 border-cyan-700/100 rounded-xl p-8 mb-6">
                <legend class="px-6 text-xl font-semibold">Thème {{ theme.name }}</legend>
                <div v-for="question in theme.questions" :key="question.id" class="mb-4 px-4">
                    <label class="block mb-2 text-lg" :for="'question-' + question.id">{{ question.name }}</label>
                    <textarea 
                        :id="'question-' + question.id"
                        v-model="answers[question.id]"
                        :name="question.name" 
                        class="border border-cyan-700/100 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    ></textarea>
                </div>
            </fieldset>
            <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full bg-cyan-700 text-white cursor-pointer font-bold py-4 rounded-xl text-lg flex items-center justify-center hover:bg-cyan-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {{ isSubmitting ? 'Submitting...' : 'Submit' }}
            </button>
        </form>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import mockData from '../assets/mockData'
import type { Theme } from '@/assets/typings';

const route = useRoute();
const router = useRouter();
const centerId = Number(route.params.id);


// Store answers with question ID as key
const answers = ref<Record<number, string>>({});
const isSubmitting = ref(false);

const themes = ref<Array<Theme>>([])
const getThemes = async () => {
    // const response = await fetch(`http://localhost:3000/centers/${centerId}/themes`)
    const data = mockData
    themes.value = data.Themes
    // const data = await response.json()
    console.log(data)
}
getThemes()

const submit = async () => {
    try {
        isSubmitting.value = true;
        
        // Format the answers for submission
        const formattedAnswers = Object.entries(answers.value).map(([questionId, answer]) => ({
            questionId: Number(questionId),
            content: answer
        }));
        console.log('Formatted Answers:', formattedAnswers);

        // const response = await fetch(`http://localhost:3000/centers/${centerId}/answers`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         centerId: centerId,
        //         answers: formattedAnswers
        //     })
        // });

        // if (!response.ok) {
        //     throw new Error('Failed to submit form');
        // }

        // const result = await response.json();
        // console.log('Form submitted successfully:', result);
        
        router.push('/center/' + centerId);
        
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error submitting form. Please try again.');
    } finally {
        isSubmitting.value = false;
    }
}
</script>