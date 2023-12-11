<script lang="ts">
    import questionsFile from '$lib/questions.json';
	import type Answer from '$lib/types/Answer';
	import type Question from '$lib/types/Question';

    const questions: [Question] = JSON.parse(JSON.stringify(questionsFile));

    $: currentQuestion = questions.find(question => question.id === 1);
    let nextQuestion: Question| undefined = undefined;

    function next() {
        currentQuestion = nextQuestion;
        nextQuestion = undefined;

        return () => {}
    }

    function select(id: number) {
        nextQuestion = questions.find(question => question.id === id);

        return () => {}
    }

    function reset() {
        currentQuestion = questions.find(question => question.id === 1);
        nextQuestion = undefined;

        return () => {}
    }
</script>

<div class="p-4">
    {#if currentQuestion?.type == 'question'}
        <h1 class="text-3xl font-bold">{currentQuestion?.question}</h1>

        <div class="flex w-full flex-col">

            <div class="flex pt-10 flex-row gap-4 w-full">
                {#each currentQuestion?.answers ?? [] as answer (answer.next_id)}
                    <div class="">
                        <input type="radio" name="radio-1" class="btn" on:click={select(answer.next_id)} aria-label={answer.answer} />
                    </div>
                {/each}
            </div>
    
            <button class="btn" disabled={!nextQuestion} on:click={next}>
                <p>Volgende</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>  
            </button>
        </div>

    {:else}
        <div class="flex gap-4 flex-col">
            <div>
                <h1 class="text-xl font-bold">Resultaat</h1>
                <p>Het lijkt wel feest, een resultaat! {currentQuestion?.question} is het probleem.</p>
            </div>

            <div>
                <h1 class="text-xl font-bold">Oplossing</h1>
                <p>Een oplossing: {currentQuestion?.desc}</p>
            </div>

            <button class="btn" on:click={reset}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                <p>Opnieuw</p>
            </button>
        </div>
    {/if}
</div>