<template>
    <div>
        <h1 class="text-2xl font-bold mb-4">Formulaire de Questions</h1>
        <form action="Actionnalité">
            <fieldset v-for="theme in themes" :key="theme">
                <legend>Thème {{ theme }}</legend>
                <div v-for="question in questions.filter(q => q.theme === theme)" :key="question.id" class="mb-6 p-4 border rounded">
                    <h2 class="text-lg font-semibold mb-2">{{ question.theme }}</h2>
                    <label class="block mb-2" :for="'question-' + question.id">{{ question.text }}</label>
                    <textarea 
                        v-if="question.answerType === 'text'" 
                        :id="'question-' + question.id"
                        :name="question.name" 
                        class="border p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    <div v-else-if="question.answerType === 'radio'">
                        <label class="mr-4">
                            <input type="radio" :name="'question-' + question.id" value="yes" /> Oui
                        </label>
                        <label>
                            <input type="radio" :name="'question-' + question.id" value="no" /> Non
                        </label>
                    </div>
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
    theme: string,
    text: string,
    answerType: string,
    name: string,
}
const questions = ref<Array<Question>>([])
const getQuestions = async () => {
    // const response = await fetch(`http://localhost:3000/centers/${centerId}/questions`)
    const data = mockData
    questions.value = data.Questions
    // const data = await response.json()
    console.log(data)
}
const themes = ref<Array<string>>([])
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