<script lang="ts">
    import { Card, Select, Label, Button } from 'flowbite-svelte';

    let selected: string;

    let countries = [
        { value: 'erg', name: 'Engels Raaigras' }
    ];
</script>

<Card class="">
    <Label class="w-full">
        Selecteer grassoort
        <Select class="mt-2 w-full max-w-md" items={countries} bind:value={selected} />
    </Label>

    <div class="w-full flex flex-row gap-2 max-w-md pt-2">
        <Button class="w-full" color="alternative">Annuleer</Button>
        <Button class="w-full" color="primary">Gereed</Button>
    </div>
</Card>
