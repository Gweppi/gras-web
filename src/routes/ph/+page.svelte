<script lang="ts">

    let ph = 0;
    let area = 0;

    let alert = "";

    function calc() {
        if (ph > 5.5) {
            alert = "goed!, geen kalk nodig."
        } else {
            const dph = (5.5 - (ph)) * 10;
            const farea = area * 0.01;

            const kg = dph * farea * 5;

            console.log(`${ph} ${dph} ${farea} ${kg}`)

            alert = `Er moet ${Math.round(kg)}kg kalk in die tuin!`
        }
    }
</script>

<label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text">pH waarde?</span>
    </div>
    <input type="number" placeholder="pH waarde" bind:value={ph} class="input input-bordered w-full max-w-xs" />
</label>

<label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text">oppervlakte tuin</span>
    </div>
    <input type="number" placeholder="1000" bind:value={area} class="input input-bordered w-full max-w-xs" />
</label>

<button class="btn" on:click={calc}>Rekenen!</button>

<p>{alert}</p>