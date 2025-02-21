<script setup lang="ts">
const { data: questions, refresh } = await useFetch('/api/questions')

const duplicate = ref(false)

const getNewQuestion = () => {
  if (!questions.value) {
    return
  }
  const i = Math.floor(Math.random() * questions.value.length)
  currentQuestion.value = questions.value[i]

  if (!duplicate.value) {
    questions.value = questions.value.filter(q => q !== currentQuestion.value)
  }
}

const reset = () => {
  refresh()
  currentQuestion.value = ''
}

const currentQuestion = ref('')
</script>

<template>
  <div class="bg-gray-900 h-screen">
    <div class="flex">
      <UCard class="mx-auto mt-16 w-1/2" :ui="{background: ''}">
        <template #header>
          <AtomsHeading>Random questions</AtomsHeading>
        </template>

        <div class="h-32 relative">
          <AtomsParagraph v-if="!currentQuestion">Get your first question!</AtomsParagraph>
          <AtomsParagraph v-else>{{ currentQuestion }}</AtomsParagraph>
          <AtomsParagraph v-if="questions" class="absolute right-0 bottom-0">{{ questions.length }} questions left
          </AtomsParagraph>
        </div>

        <template #footer>
          <div class="flex justify-between">
            <UButton label="Next question"
                     variant="solid"
                     type="button"
                     size="lg"
                     @click="getNewQuestion"
                     icon="i-mdi-arrow-right"
            />

            <div class="flex space-x-4">
              <UButton label="Reset"
                       variant="solid"
                       type="button"
                       size="lg"
                       @click="reset"
                       icon="i-mdi-reload"
              />

              <div class="flex space-x-1 items-center">
                <UToggle v-model="duplicate"
                         on-icon="i-mdi-check"
                         off-icon="i-mdi-close"
                         size="lg"
                />
                <AtomsParagraph>Duplicates</AtomsParagraph>
              </div>
            </div>
          </div>

        </template>
      </UCard>
    </div>
  </div>
</template>
