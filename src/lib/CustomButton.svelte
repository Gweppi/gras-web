<script lang="ts">

    export let text: string;
</script>

<button>
    <div class="flex items-center justify-center w-40 h-16 border-2 border-green-400 rounded-full hover:bg-green-400 group transition-colors">
        <p class="font-semibold uppercase text-green-400 group-hover:text-white text-center">{text}</p>
    </div>
</button>