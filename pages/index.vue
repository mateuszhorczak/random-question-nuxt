<script setup lang="ts">

  const { data: questions } = await useFetch('/api/questions')


const getNewQuestion = () => {
  if (!questions.value) {
    return
  }
  const i = Math.floor(Math.random() * questions.value.length)
  currentQuestion.value = questions.value[i]
}

const currentQuestion = ref('')

</script>

<template>
  <div class="bg-gray-900 h-screen">
    <div class="flex">
      <UCard class="mx-auto mt-16 w-1/2">
        <template #header>
          <AtomsHeading>Random questions</AtomsHeading>
        </template>

        <div class="h-32">
          <AtomsParagraph v-if="!currentQuestion">Get your first question!</AtomsParagraph>
          <AtomsParagraph v-else>{{ currentQuestion }}</AtomsParagraph>
        </div>

        <template #footer>
          <UButton label="Next question" variant="solid" type="button" size="lg" @click="getNewQuestion" icon="i-mdi-arrow-right" />
        </template>
      </UCard>
    </div>
  </div>
</template>
