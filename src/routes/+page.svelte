<script lang="ts">
	import { goto } from "$app/navigation";


    function tree() {
        goto("/tree");
    }

    function ph() {
        goto("/ph");
    }
</script>

<button class="btn" on:click={tree}>Gras Diagnose</button>
<button class="btn" on:click={ph}>pH waarde checken</button>