<script>
  import { fade } from "svelte/transition";

</script>

<style>
.modalBG {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .8);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal {
  background-color: #FFF;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30vw;
  margin-top: 25vh;
}
</style>


<div class="modalBG" transition:fade>
<div class="modal" transition:fade>
<!-- <slot>optional fallback</slot> -->
  <slot />
</div>
</div>
