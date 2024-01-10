<script lang="ts">

    let ph = 5.5;
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

            alert = `Er moet ${Math.round(kg)}kg kalk in de tuin.`
        }
    }
</script>

<div class="flex w-full justify-center">
    <div class="flex flex-col p-4 gap-4">
        <div class="flex flex-col gap-4">
            <label class="form-control w-full">
                <div class="label">
                  <span class="label-text">pH waarde</span>
                </div>
                <input type="number" placeholder="pH waarde" bind:value={ph} class="input input-bordered w-full max-w-md" disabled />
            </label>
            
            <input type="range" min="0" max="14" class="range range-primary max-w-md" step="0.1" bind:value={ph} />
        </div>
        
        <label class="form-control w-full">
            <div class="label">
              <span class="label-text">Oppervlakte tuin</span>
            </div>
            <input type="number" placeholder="1000" bind:value={area} class="input input-bordered w-full max-w-md" />
        </label>
        
        <button class="btn btn-primary btn-outline" on:click={calc}>Bereken</button>
        
        <p>{alert}</p>
    </div>
</div>