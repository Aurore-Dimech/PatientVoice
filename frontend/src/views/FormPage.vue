<template>
    <div class="bg-gray-50 min-h-screen p-8">
        <h1 class="text-2xl font-bold mb-4">Formulaire de Questions</h1>
        <form action="Actionnalité">
            <fieldset v-for="theme in themes" :key="theme.name" class="bg-white border-2 border-cyan-700/100 rounded-xl p-8 mb-6">
                <legend class="px-6 text-xl font-semibold">Thème {{ theme.name }}</legend>
                <div v-for="question in theme.questions" :key="question.id" class="mb-4 px-4">
                    <label class="block mb-2 text-lg" :for="'question-' + question.id">{{ question.name }}</label>
                    <textarea 
                        :id="'question-' + question.id"
                        :name="question.name" 
                        class="border border-cyan-700/100 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    ></textarea>
                </div>
            </fieldset>
        </form>

    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import mockData from '../assets/mockData'

const route = useRoute();
const centerId = Number(route.params.id);

type Question = {
    id: number,
    name: string,
}
type Theme = {
    name: string,
    questions: Array<Question>,
}
const questions = ref<Array<Question>>([])
const getQuestions = async () => {
    // const response = await fetch(`http://localhost:3000/centers/${centerId}/questions`)
    const data = mockData
    questions.value = data.Questions
    // const data = await response.json()
    console.log(data)
}
const themes = ref<Array<Theme>>([])
const getThemes = async () => {
    // const response = await fetch(`http://localhost:3000/centers/${centerId}/themes`)
    const data = mockData
    themes.value = data.Themes
    // const data = await response.json()
    console.log(data)
}
getThemes()
getQuestions()
</script>