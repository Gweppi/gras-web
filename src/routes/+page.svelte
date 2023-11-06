<script lang="ts">
	import CustomButton from "$lib/CustomButton.svelte";

</script>

<div class="flex h-full">
    <div class="flex flex-col gap-20 ml-20 mt-20">
        <div class="flex flex-col gap-10">
            <p class="text-sm text-gray-400">Vraag 1</p>
    
            <h1 class="text-3xl font-bold">Als ik een vraag vraag,
                antwoord dan de vraag?
            </h1>
    
            <h2 class="font-light">Dit is zeer belangrijke informatie,
                als we deze informatie niet hadden,
                zouden we gaan huilen in een hoekje.
                Of erger, schreeuwen van de geestelijke pijn.
            </h2>
        </div>
    
        <div class="flex flex-row gap-7">
            <CustomButton text="ja" />
            <CustomButton text="nee" />
            <CustomButton text="boeie ruurt" />
        </div>
    
        
        <div class="flex w-full relative mt-auto mb-24">
            <div class="z-1 bg-gray-200 h-2 w-[100%] rounded-full"></div>
            <div class="absolute inset-0 z-2 bg-green-400 h-2 w-[20%] rounded-full"></div>
        </div>
    </div>

    <div class="flex items-end justify-end w-full pointer-events-none">
        <img class="max-h-screen" src="grass.png" alt="gras">
    </div>
</div>

<div class="absolute bottom-1 left-[50%] text-gray-300 text-xs">
    PWS 2023
</div>
