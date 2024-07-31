<script>
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import aulys from "$lib/images/aulys.png";

  let greeting = "Bonjour";

  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  if (currentHour >= 18 || currentHour < 6) {
    greeting = "Bonsoir";
  }
</script>

<div id="hero" class="hero">
  <div
    class="hero-content flex-col lg:flex-row lg:max-w-5xl md:max-w-xl sm:max-w-md max-w-64"
  >
    <img src={aulys} class="lg:max-w-xs mx-20 sm:max-w-52 mb-10 max-w-60" />

    <div>
      <h1 class="text-5xl font-bold">{greeting} !</h1>
      <p class="py-6">
        Bienvenue sur le site d'Aulys VINAY, codé à l'arrache après un DS de
        physique.
      </p>

      <a href="/tipe"
        ><button class="btn btn-primary">
          <i class="fa-solid fa-microscope mr-3 text-ba"></i>Tipe</button
        >
      </a>
    </div>
  </div>
</div>

<div class="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    <!-- Page content here -->
    <label
      for="my-drawer-2"
      class="toast toast-start toast-middle m-3 btn btn-circle drawer-button lg:hidden"
    >
      <i class="fa-solid fa-bars"></i>
    </label>
  </div>
  <div class="drawer-side">
    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"
    ></label>
    <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      <ul class="menu w-56">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul>
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
            <li>
              <a>Parent</a>
              <ul>
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </ul>
  </div>
</div>

<div class="content">
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quasi sunt
    assumenda pariatur possimus minima harum voluptate aperiam, ea impedit
    aliquid debitis provident eius sed cumque illum saepe ducimus vero
    repellendus accusantium magnam accusamus rem? Velit ea iusto hic blanditiis
    voluptatem eaque ipsum nobis aspernatur repellendus? Quo dignissimos
    perferendis, omnis quasi voluptatum fugit placeat? Ipsa officia ea expedita
    velit dicta consequuntur harum eligendi natus dolorem ratione nemo nostrum,
    iusto magni maiores doloribus, cum omnis nobis asperiores adipisci vitae
    nisi voluptatibus labore sint? Quos nostrum ipsam explicabo possimus
    officiis ducimus eveniet ipsa sunt architecto modi, repellendus fugiat
    facilis laudantium! Itaque optio voluptates ullam reprehenderit reiciendis,
    voluptatum delectus libero sint animi! Nisi saepe omnis odio? Quibusdam
    iusto rerum ipsam error ut porro amet incidunt inventore veritatis at
    nesciunt, mollitia facilis quas dignissimos omnis cumque architecto impedit,
    ex repellat minima. Saepe, tempora alias. Eius minus cum quidem aliquid
    commodi! Rem, recusandae. Maxime inventore perferendis quos! Temporibus
    suscipit ex architecto odit tenetur quia totam recusandae expedita
    repellendus atque quae libero laudantium rem asperiores, ipsam consequatur
    dolore laboriosam adipisci aliquam pariatur nostrum nam ab accusantium!
  </p>
</div>

<!-- <style>
  #hero {
    height: 70vh;
  }
</style> -->

<!-- <style>
#landing {
    height: 90vh;
    width: 90vw;
    margin: 2em auto;
    border-radius: 20px;
    background-image: url('src/images/lush-min.jpg');
    background-attachment: fixed;
    background-size: cover;
    /* background-position: center; */
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#landing img {
    width: 15em;
    height: auto;
    border-radius: 10px;
}

#landing>img {
    margin-bottom: 2em;
}
</style> -->
