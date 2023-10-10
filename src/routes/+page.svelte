<script lang="ts">
    import { Card, Select, Label, Button, Range } from 'flowbite-svelte';

    let selected: string;

    let countries = [
        { value: 'erg', name: 'Engels Raaigras' }
    ];

    let ph: number = 7;
</script>

<div class="flex w-full justify-center p-4">
    <Card class="w-full">
        <div class="flex gap-4 flex-col">
            <Label class="w-full">
                Selecteer grassoort
                <Select class="mt-2 w-full max-w-md" items={countries} bind:value={selected} />
            </Label>

            <Label for="default-input" class="w-full">
                <p>pH waarde: {ph}</p>
                <Range color="green" id="range-steps" min="0" max="14" bind:value={ph} step="1" />
            </Label>
    
            <Label class="w-full">
                Selecteer grassoort
                <Select class="mt-2 w-full max-w-md" items={countries} bind:value={selected} />
            </Label>
    
            <Label class="w-full">
                Selecteer grassoort
                <Select class="mt-2 w-full max-w-md" items={countries} bind:value={selected} />
            </Label>
        </div>
    
        <div class="w-full flex flex-row gap-2 max-w-md pt-10">
            <Button class="w-full" color="alternative">Annuleer</Button>
            <Button class="w-full" color="green">Gereed</Button>
        </div>
    </Card>
</div>
