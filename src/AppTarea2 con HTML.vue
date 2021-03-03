<template>
  <div id="App">
 
    <section class="header">
      <div class="logo">
        <img src="https://static.platzi.com/media/user_upload/logo-d871d30b-ac23-4240-93f3-13e49084d80b.jpg" alt="">
      </div>
      <div class="buscar">
        <input class="buscar_texto" type="text" placeholder="Busca tu película, actor, o director favorito.">
      </div>
      <div class="usuario">
        <h2 class="usuario_text">Kiyosaki</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyv-9ZkEOJqXyELYYJZ3UJ_bvqVhIkaYGL0cpVIVrZr5v-fF7c7O2UZP6W_ISSeIE5rxUZPPMiy7nPNXhYjPwh6hM9Dsse_yBq1w&usqp=CAU&ec=45761792" alt="" class="avatar">
        <icon class="opciones"><i class="fas fa-fire fa-2x"></i></icon>
      </div>
    </section>

    <div class="menu_lateral">
      <div class="menu_container_top">
        <div class="opcion_menu">
          <icon class="icono">
            <i class="fas fa-home fa-2x"></i>
          </icon>
          <label for="">Home</label>        
        </div>
        <div class="opcion_menu">
          <icon class="icono">
            <i class="fas fa-fire fa-2x"></i>
          </icon>
          <label for="">Trending</label>        
        </div>
        <div class="opcion_menu">
          <icon class="icono">
            <i class="fas fa-heart fa-2x"></i>
          </icon>
          <label for="">Más likes</label>        
        </div>
      </div>
    
       <div class="menu_container_bottom">
        <div class="opcion_menu">
          <icon class="icono">
            <i class="fas fa-cog fa-1x"></i>
          </icon>
          <label for="">Ajustes</label>        
        </div>
       </div>
  
    </div>

    <div class="main">
      <h2 class="texto_categoria">Ahora en el cine</h2>
      <div class="pelicula_categoria">
        <div class="pelicula">
          <img src="https://i1.wp.com/www.sopitas.com/wp-content/uploads/2019/05/up-pelicula-quiz.jpg" alt="" class="foto_pelicula">
          <div class="pelicula_hover">
            <h2>Up</h2>
            <p class="descripcion_pelicula">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, praesentium!</p>
          </div>
        </div>

        <div class="pelicula">
          <img src="https://i.blogs.es/554926/carlyesposa/450_1000.jpg" alt="" class="foto_pelicula">
          <div class="pelicula_hover">
            <h2>Up</h2>
            <p class="descripcion_pelicula">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, praesentium!</p>
          </div>
        </div>

        <div class="pelicula">
          <img src="https://blog.stannah.co/wp-content/uploads/sites/17/2019/10/carl-russel-dug.jpg" alt="" class="foto_pelicula">
          <div class="pelicula_hover">
            <h2>Up</h2>
            <p class="descripcion_pelicula">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, praesentium!</p>
          </div>
        </div>
      </div>
      
      <h2 class="texto_categoria">Ahora en el cine</h2>
      <div class="pelicula_categoria">
        <div class="pelicula">
          <img src="https://fotografias.flooxernow.com/clipping/cmsimages01/2020/01/09/44992B47-09FA-4EE9-9B24-E9100A76CB2F/58.jpg" alt="" class="foto_pelicula">
          <div class="pelicula_hover">
            <h2>Up</h2>
            <p class="descripcion_pelicula">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, praesentium!</p>
          </div>
        </div>

        <div class="pelicula">
          <img src="https://blog.stannah.co/wp-content/uploads/sites/17/2019/10/russell-carl.jpg" alt="" class="foto_pelicula">
          <div class="pelicula_hover">
            <h2>Up</h2>
            <p class="descripcion_pelicula">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, praesentium!</p>
          </div>
        </div>

        <div class="pelicula">
          <img src="https://www.tuenlinea.com/wp-content/uploads/2018/08/Abuelitos-festejan-su-60-Aniversario-llevando-a-la-realidad-la-peli-UP-1280x720.jpg" alt="" class="foto_pelicula">
          <div class="pelicula_hover">
            <h2>Up</h2>
            <p class="descripcion_pelicula">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, praesentium!</p>
          </div>
        </div>
      </div>
      
     
    </div>

    

  </div>

  
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
  //  HelloWorld
  }
}
</script>

<style>
 @import '//use.fontawesome.com/releases/v5.0.7/css/all.css';
 @import 'https://fonts.gstatic.com';
 @import 'https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap';

#App {
  font-family: 'Lato', sans-serif;
  width: 1024px;
  margin: 0 auto;

}

/* header */
.header{
  display: flex;
  height: 72px;
  align-items: center;
   box-shadow: 0px 0px 3px 3px #ccc
}

.logo{
  background-color: #FF9300;
  width:200px;
}

.buscar{
  width:600px;
  text-align: center;
  margin-top: 6px;
  margin-left: 32px;
}

.buscar_texto{
  display: block;
  width: 100%;
  padding: 2px 6px;
  font-size: 16px;
  line-height: 24px;
}

.usuario{
  width: 224px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}

.usuario_text{
  margin-right: 8px;
  font-size: 16px;
  color: #38292a;
}
.avatar{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
}

.usuario .opciones{
  margin-right: 16px;
}

/* Menu Laterial */
.menu_lateral{
  float: left;
  width: 89px;
  height: 810px;
  background: linear-gradient(to right,  #FF535B, #FD746C);
  text-align: center;
}
.menu_container_bottom{
  margin-top: 330px;
  padding-top: 16px;
  height: 60px;
}
.opcion_menu icon, .opcion_menu label{
  color: white;
  display: block;
  margin-top: 16px;
}

/* Main */
.main{
  float: left;
  width: 935px;
}

.texto_categoria{
  margin-left: 16px;
  font-size: 20px;
}

.pelicula_categoria{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.pelicula{
  width: 287px;
  height: 192px;
  margin-bottom: 10px;
  position: relative;
  cursor: pointer;
  color: #ffffff;
}
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.pelicula_hover{
  position: absolute;
  padding: 8px;
  width: 271px;
  height: 84px;
  top: 92px;
  background: rgba(255, 83, 91, 0.7);

}
.pelicula_hover h2, .pelicula_hover p{
  margin: 0px;
}

</style>
