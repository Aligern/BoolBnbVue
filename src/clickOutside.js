export default {
    beforeMount(el, binding) {
      el.clickOutsideEvent = function(event) {
        // Controlla se il clic è al di fuori dell'elemento
        if (!(el === event.target || el.contains(event.target))) {
          binding.value(event, el);
        }
      };
      document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el) {
      document.body.removeEventListener('click', el.clickOutsideEvent);
    },
  };