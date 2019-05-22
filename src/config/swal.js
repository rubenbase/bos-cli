import Swal from 'sweetalert2';

export const toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

export const confirmDelete = (title = 'Seguro?', text = 'No podrás volver atras') =>
  new Promise(resolve => {
    Swal({
      title,
      text,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#009432',
      cancelButtonColor: '#EA2027',
      confirmButtonText: 'Ok'
    }).then(result => {
      if (result.value) {
        resolve(true);
      }
    });
  });

export const prompt = (text = 'Input', inputPlaceholder = text, rest) =>
  Swal({
    title: text,
    input: 'text',
    inputPlaceholder,
    showCancelButton: true,
    inputValidator: value => {
      return !value && 'Campo vacío...';
    },
    ...rest
  });
