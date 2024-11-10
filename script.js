document.getElementById("btn-submit").addEventListener('click', ()=> {
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const qty = document.getElementById('qty');

    const thumbnail = document.getElementById("thumbnail").files;
    const imageUrl = URL.createObjectURL(thumbnail[0]);

    document.getElementById('root').innerHTML += `
        <tr>
          <td>${id}</td>
          <td>${name}</td>
          <td>${price}$</td>
          <td>${qty}</td>
          <td>
            <img style="height: 60px;" src="${imageUrl}" alt="">
          </td>
          <td>
            <button class="btn-edit btn btn-success">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>`;
});



