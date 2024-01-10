<script lang="ts">
    import questionsFile from '$lib/questions.json';
	import type Question from '$lib/types/Question';
    import { Confetti } from "svelte-confetti"

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

<style>

    .confetti {
        position: fixed;
        top: -50px;
        left: 0;
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        overflow: hidden;
        pointer-events: none;
    }

</style>

<div class="flex w-screen justify-center">
    <div class="flex p-4 gap-4 flex-col w-full max-w-md">
        {#if currentQuestion?.type == 'question'}
            <h1 class="text-3xl font-bold">{currentQuestion?.question}</h1>
    
            <div class="flex flex-col gap-4">
    
                {#each currentQuestion?.answers ?? [] as answer (answer.next_id)}
                    <input type="radio" name="radio-1" class="btn" on:click={select(answer.next_id)} aria-label={answer.answer} />
                {/each}
        
                <div class="pt-4">
                    <button class="btn w-full" disabled={!nextQuestion} on:click={next}>
                        <p>Volgende</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>  
                    </button>
                </div>
            </div>
    
        {:else}
            <div class="flex gap-4 flex-col w-full">
                {#if currentQuestion?.id == 19}
                    <div class="flex flex-col">
                        <h1 class="text-xl font-bold">Das mooi!</h1>
                        <p>{currentQuestion?.question}</p>
                    </div>
                {:else}
                    <div>
                        <h1 class="text-xl font-bold">Resultaat</h1>
                        <p>{currentQuestion?.question}</p>
                    </div>

                    <div>
                        <h1 class="text-xl font-bold">Oplossing</h1>
                        <p>Een oplossing: {currentQuestion?.desc}</p>
                    </div>
                {/if}
    
                <button class="btn" on:click={reset}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    <p>Opnieuw</p>
                </button>
            </div>
        {/if}
    </div>
</div>

{#if currentQuestion?.id == 19}
     <div class="confetti">
        <Confetti x={[-5, 5]} y={[0, 0.1]} delay={[500, 2000]} infinite duration={5000} amount={200} fallDistance="100vh" />
    </div>
{/if}