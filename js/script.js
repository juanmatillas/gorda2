/* ==================================================
   💎 MODALES BASE (ABRIR / CERRAR)
================================================== */

function openModal(id) {
  const modal = document.getElementById(id);

  if (!modal) return;

  modal.style.display = "block";

  requestAnimationFrame(() => {
    modal.classList.add("active");
  });

  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  const modal = document.getElementById(id);

  if (!modal) return;

  modal.classList.remove("active");

  setTimeout(() => {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }, 350);
}

/* ==================================================
   🎯 BOTONES PRINCIPALES
================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const btnGaleria = document.getElementById("btn-galeria");
  const btnTextos = document.getElementById("btn-textos");
  const btnVideo = document.getElementById("btn-video");
  const btnSpotify = document.getElementById("btn-spotify");

  if (btnGaleria)
    btnGaleria.addEventListener("click", () => openModal("modal-galeria"));
  if (btnTextos)
    btnTextos.addEventListener("click", () => openModal("modal-textos"));

  if (btnVideo) {
    btnVideo.addEventListener("click", () => {
      window.open("https://youtu.be/InWLCcI3tD0", "_blank");
    });
  }

  if (btnSpotify) {
    btnSpotify.addEventListener("click", () => {
      window.open("https://open.spotify.com", "_blank");
    });
  }
});

/* ==================================================
   📸 GALERÍA AUTOMÁTICA
================================================== */

const cont = document.getElementById("galeriaFotos");

if (cont) {
  for (let i = 1; i <= 89; i++) {
    const img = document.createElement("img");
    img.src = `img/viajeCordoba/${i}.jpeg`;
    img.loading = "lazy";
    cont.appendChild(img);
  }
}

/* ==================================================
   💌 SISTEMA DE CARTAS (MESES)
================================================== */

window.openLetter = function (month) {
  const box = document.getElementById("letter-box");
  const menu = document.getElementById("letters-menu");
  const view = document.getElementById("letter-view");

  if (!box || !menu || !view) {
    console.error("❌ Falta HTML del sistema de cartas");
    return;
  }

  const letters = {
    1: "💙 Mes 1<br><br>Hola guapísima yo no suelo hacer esto pero bueno esta vez me daré el lujito, 1 mesecito de novios rawr, es algo curioso la verdad, algo que me cuentan hace 3 meses que no te “conocía” y te digo que es completamente imposible y que no pasaría jamas, pero bueno has hecho algo mágico en mi y me has hecho sentir cosas que no pensaba volver a sentir, has sido un ser de luz en mi vida, apareciste cuando no quería que apareciese nadie y al principio si que me dio bastante miedo yo en el fondo no buscaba nada del otro mundo contigo, pero yo no se querer a medias es algo que o quiero del todo o no quiero, tu viste algo en mi muy fuerte desde el primer momento para aguantar lo que has aguantado y confiar tanto en que pueda salir bien, yo fui un poquito capullo al principio con alguna cosa que otra que bueno, me sigue costando entender porque lo has aguantado pero solo puedo darte las gracias por quedarte y confiar mas en mi que yo mismo, he tenido momentos que no me reconocía ni yo pero ahí estabas tu que a pesar de mis cagadas si que veías a mi verdadero yo, también aunque hiciese cosas mal se que hacia muchas bien también y eso en el fondo también ha marcado la diferencia, me sigue sorprendiendo mucho tu forma de ser y de pensar que se parece tanto a la mía y nunca había visto a nadie así, eres una aguja en un pajar siento que eres una persona que te cruzas una vez en la vida, eso que dice la gente de tu media naranja pues te juro de verdad que yo creo que esa persona eres tu, has hecho mucho por mi y has dado mucho de ti cuando parecía que yo no lo hacia y eso lo valoro muchísimo porque en 2 3 meses que te conozco has hecho por mi cosas que no ha hecho nadie nunca y para mi muchas cosas son nuevas también, sigues siendo lo único que tengo en la cabeza las 24 horas del día y eso es una locura, te quiero con todo mi corazón y puedo decir que ahora mismo estoy abierto a ti casi al 100% no digo el 100 porque todavía no soy cursi del todo contigo pero por el resto, abierto del todo, no quiero escribir mucho tampoco, feliz primer mes de novios, muchas gracias por todo, te quiero un montón, me estoy enamorando de ti, me hace ilusión ser tu primer amor y no se que tendría que pasar para que tu y yo lo dejemos, vamos muy harta de mi tendrías que estar y ya me he vuelto a encontrar a mi mismo así que eso no va a pasar, que vamos a estar muuuuuchisimo tiempo juntos, que yo no te suelto por nada eres mi mejor casualidad y se lo que vales, no te puedo dejar escapar así como así, preparate que tienes juan para rato, me haces muy feliz, este tiempo a tu lado que no se si han sido como 3 meses siento que hayan sido 2 semanas, a tu lado el tiempo no pasa, gracias por ver en mi lo que quiera que hayas visto que te haya hecho confiar tanto en mi para ser tu primera vez en tantas cosas, me haces sentir muy especial, de verdad eres la mejor, te quiero mucho gordita🫶🏼🫶🏼 feliz cumplemes🩵 rawr😛",
    2: `💙 Mes 2<br><br>Gordita de mi corazón, mi amor, mi sol, mi luz, mi rubia, mi princesa, mi novia, mi futura mujer, mi vida, mi leona, mi preciosa, mi hermosa, mi todo, felices 2 mesecitos de novios🥹🥹 la verdad que ahora mismo hay poco que te pueda decir que no te haya dicho pero nunca esta de mas recordar las cosas, es increíble como en tan poco tiempo se puede sentir tanto por alguien, y aunque llevamos 2 meses para mi es como si llevaramos desde julio porque desde el momento que te vi que empece a hablar contigo te he pensado todos los dias y desde el dia que te vi absolutamente todos sin fallar ni uno todo el tiempo estas y has estado en mi cabeza y aunque en ese momento no buscaba nada serio eso es algo que no puedo evitar yo soy asi, me gusta querer a una persona preocuparme por una persona amar a una persona y desde el primer momento fuiste tu y aunque no quisiera nada serio sabia que me iba a costar muchisimo alejarme de ti, fijate que tanto que lo intente y no pude, porque eres tan perfecta que no podia dejarte escapar sin intentar este amor tan bonito que tenemos, tu forma de ser es mi forma de ser deseada de una mujer, alguien que se da su valor, que respeta desde el primer momento que eso no lo he visto nunca nada mas que en mi mismo, que se fija en los detalles y piensa las cosas antes de, para no hacerme daño, que te abrieras tanto conmigo desde el principio porque sentiste lo mismo que yo, que tu eres para mi y yo soy para ti, gracias por darme esa confianza que me diste en todo momento y esa prioridad ante todo, gracias por confiar en mi y creer en lo que digo aunque parezca mentira, por quedarte a mi lado y tener paciencia cuando nadie se habria quedado, eso habla mucho de ti, de que estás dispuesta a dar todo por mi, por luchar si hace falta y tragar mierda para que vengan tiempos mejores, pero en su momento lo hiciste practicamente sin motivos y eso me fascina mucho me hace sentirme muy especial, todas las veces que has sacado tiempo para mi de donde no lo hay, que has dormido menos por hablar conmigo, que has preferido quedar conmigo a quedarte descansando aun estando muy cansada, que a mi no me importaria que te quedaras descansando pero prefieres verme a mi, me encanta verte y estar contigo, se me olvida todo, se me pasa el tiempo volando, haces que las horas a tu lado sean minutos, 2 meses juntos que ya digo que para mi como si fuesen 4 desde julio, me parece que fue ayer cuando te vi el dia de tu cumple, que te quedaste toda la tarde conmigo y me diste ese tiempo que no tenias porque darmelo, has sido tu desde el primer momento y me tienes enamorado por completo, encima a todo esto le sumamos lo absurdamente preciosa que eres que no tiene sentido lo guapa y lo todo que eres que pareces un puto angel caido del cielo, aqui estando conmigo, que te amo con mi mida mi amor, que nunca te voy a fallar, siempre voy a estar ahi para todo lo que necesites, en todo lo que te pueda ayudar y un poquito mas siempre me vas a tener ahi, a tu lado, siempre te apoyare y ojalá de verdad ojalá sea asi para siempre hasta el fin de mis dias, yo no le cuento nada a nadie, ni a mi madre, nunca aviso de nada de lo que hago, practicamente nadie sabe de mi vida y ahora cada cosa que hago o que me pasa ya estoy pensando en contartela o en hacerle una foto para enseñartelo, no sales de mi cabeza ni un momento es una locura y cada vez es mas fuerte mi amor hacia ti, haces en mi cosas extrañas que no entiendo ni yo y aqui te voy a confesar una cosa que me pasa y me da un poco nose si miedo nose como llamarlo, pero bastantes veces, tampoco todos los dias pero me dan ganas de escribir textos y mandartelos o en tener detalles contigo asi tontos y no tan tontos, pero muchas veces no lo hago porque, yo, nunca he sido asi y me da como miedo que en 2 meses 5 meses lo que sea deje alomejor de querer escribir tanto y que pienses que no te quiero o cosas asi, pero yo hasta donde yo me conozco no soy detallista y estas cosas no se como llevarlo muy bien, lo que si que se es que me haces muy feliz, muy muy feliz, extremadamente feliz, podria enfardarme 1000 veces contigo y querer arreglarlo 1001 veces, no me quiero separar de tu lado por nada del mundo, has venido a mi vida a sumarme y lo haces muy bien, tienes todo, todo lo que puedo pedir y mas y ojalá te pudiera ver mas, ojalá viviesemos juntos, ojalá nos casemos y tengamos hijos y que todo sea super bonito, eres mi chica perfecta y a ti no te suelto, te tenia una sorpresita muy tonta que te iba a hacer y con esto de tener que venir a granada y tal no he podido, me da un poquito de rabia pero bueno en otro momento sera, lo digo porque necesitaba decirlo pero ni me preguntes porque no te voy a decir que es, te puedo decir que es una cosa que no he hecho nunca y me da bastante vergüenza 🙃🙃 pero quiero que seas tu la primera que tenga algo asi de mi, jjj espero que salga bien, bueno no voy a dar mas detalles, eres un ser de luz gracias por aparecer en mi vida eres de lo mejor que me ha pasado mi amor mas bonito un amor bonito por tu parte y por la mia, gracias por todo cariño y yo no queria escribir mucho pero me pongo y me enrollo jajajj espero que no sea mucha lata leerlo, un dia te voy a hacer un libro macho🤣, nada amor que felices 2 meses, mi gordita que te amo con todo mi corazón y que sigamos sumando🩵🩵🩵🩵🩵🩵🩵🩵🩵🩵🩵🩵🩵🩵🩵🩵🩵🩵🩵🩵🩵🩵🩵🩵`,
    3: `💙 Mes 3<br><br>Mi vida de mi corazón, felices 3 meses😍😍😍 no voy a decir mucho solo que pases buena mañana ahí currando a tope, que eres muy importante para mi, estoy muy feliz de tenerte a mi lado, que eres muy buena niña que a veces demasiado haces mucho por la gente y no te valoran lo que deberian pero tu siempre haces todo lo que puedes y un poquito mas, que te amo con todo mi corazón me encanta todo de ti, no me imagino un ahora sin estar a tu lado, me imagino un futuro contigo y me gusta mucho, estas en el top top de personas importantes en mi vida y de ahi no te saca nadie, estoy enamorado de ti, me gustas siempre me gustas cuando te ries me gustas cuando te enfadas me gustas cuando estas triste me gustas cuando estas feliz y lo que mas me gusta es que puedes estar conmigo de todas las maneras y yo tambien contigo, te amo gorda felices 3 meses y vamos a por mas jjjj a ver si te duro un poco, como dicen en los videos, si has llegado hasta aqui te dejo una pista de que te tengo una sorpresita que creo que te va a gustar mucho, es una tonteria pero es especial ya lo tengo pero no, dentro de poco… un beso mi amor🫶🏼🥹y buenos dias`,
    4: `💙 Mes 4<br><br>Mi amor antes de dormirme unas palabritas, eres lo mejor que me ha pasado en la vida, enserio, te amo demasiado, sigues como el primer dia, cada segundo del dia estas en mi cabeza es una cosa que ya roza la locura, enserio no se como expresar lo feliz que me haces, lo que me gustas, lo que me gusta todo de ti, tantas cosas en mi cabeza que quiero hacer contigo, un futuro tan bonito como me imagino, me da un poco de miedo que no pasen las cosas como me gustarian pero bueno espero que lo sepamos llevar y que sigamos los dos juntos, contigo a mi lado, todos los baches que hemos superado, no me arrepiento de nada, me haces muy muy feliz miamor, felices cuatro meses y vamos a por mas, te amo gorda🩵 con todo mi corazón, besitos y buenos días princesa🥹💍`,
    5: `💙 Mes 5<br><br>Hola mivida, estoy escribiendo esto a las 3 de la mañana pero te lo voy a mandar cuando me levante a ver si tu sin yo mandarte nada me felicitas el mes, ojalá espero y deseo que si que sea asi, felices 5 meses gordita, has dado luz a mi vida desde que llegaste, eres la mejor persona que conozco, estoy muy orgulloso de ti y de quien eres, se que estoy haciendo las cosas mal amor y no me doy cuenta, se que lo hago mal y necesito que me digas todo lo que hago mal para poder hacerlo mejor, te amo por regalarme a thor, aunque ahora digas que no me lo has regalado, yo se que si amor y se que es dificil, para mi esta siendo muy muy difícil amor lo estoy pasando fatal, pero confio en mi, confio en ti, y se que en un futuro nos alegraremos de esta decisión, llevamos unos dias que solo nos estamos viendo con o por thor y creo que eso ha sido el detonante, tu y yo amor nos hacemos muchísima falta, y el hecho de vernos pero no disfrutar de nosotros en si, no lo sabemos llevar,(creo yo) se cual es tu decisión, se que no quieres ver a thor, lo voy a respetar amor, si es lo que quieres, eso haré, pero eso no quita que vaya a ser difícil para mi, a parte de thor amor, entre tu y yo, amo todo de ti amor, como me miras, con los ojitos de amor que me ves, tu sonrisa al verme, que hagas que se me olvide todo, tu forma tan real de ser conmigo, todos los esfuerzos que haces por mi, que se que son muchos gorda, lo valoro todo, eres un mujeron de 10 y que nadie nunca te haga creer otra cosa, las personas que opinan que te de igual, nadie tiene ni puta idea porque no te conocen ni ven lo que veo yo, entonces ninguna opinion podra ser como la mia, estoy muy feliz y muy contento de tenerte a mi lado y de haber pasado estos ultimos 5 meses con quien es el amor de mi vida, que me estas dando los mejores meses de mi vida, ojalá que sean años y años, te amo con mi vida gorda, nunca lo olvides y nunca lo dudes, y perdon por todo lo que hago que te pueda hacer sentir mal, o sentir que me importas menos o alguna cosa asi, amor eres y siempre seras mi prioridad numero uno, porfavor siempre tenlo en la cabeza, eres lo mas importante para mi y por ti haria cualquier cosa, un dia me dicen que necesitas mi corazón y te juro que te daria el mio, asi es el amor que siento por ti, estoy completamente enamorado de ti gordita, no quiero que nos separemos nunca y que este amor no se acabe, ojalá siempre pienses igual y esto durara muchísimos años, te amo gorda, eres lo mejor que me ha pasado en mi vida, te amo, eres el amor de mi vida🫶🏼🥹🩵 y ojala y algun dia……💍`,
    6: `💙 Mes 6<br><br>Miamor hace tiempo que no te dedico un textito asi que va tocando hablar un poco, quiero hablar un poco de como me siento ahora mismo y decirte lo exageradamente importante que eres para mi, amor cuando no estoy contigo, cuando no te veo siento un vacio tan grande en el corazón siento que se me arruga el corazón, de verdad que llenas mi vida entera nose como es posible, bueno si lo se, porque eres la mujer perfecta, me encanta todo de ti, eres tu, siempre seras tu, se que estos dias no estoy muy cariñoso pero me encuentro fatal con lo de los mocos, intento estar lo mejor posible pero esque no puedo amor perdon, tambien ahora con estos cambios de que ya no tengo clase ahora que si vienen las practicas que si voy a tener que trabajar a la vez me da mucho miedo porque se que no te voy a poder ver mucho y solo de pensarlo lo estoy pasando fatal, la falta que me haces, lo que te necesito es demasiado, me gustaria poder estar contigo 50h al dia y me mata que no sea asi, tambien eso es bonito porque nos echamos de menos pero joder yo te echo muchisimo de menos, quiero que sepas y recalcar lo feliz que me haces, lo agusto y comodo que estoy contigo, que contigo puedo ser yo mismo, que cada cosa que me da asi más vergüenza contigo soy capaz de hacerlo, que siempre me apoyes, y me animes, todo el cariño que me das, toda la atención, que haces cualquier cosa por mi, las cosas que me molestan las cambias amor y te agradezco mucho todo lo que haces, quiero que sepas que nadie nunca me va a mirar como me miras tu, me va a ver como me ves tu, me va a besar como lo haces tu, me va a dar los abrazos que me das tu, ni me va a amar como tu, te amo con todo mi corazón cada momento del dia pienso en ti, quiero un futuro contigo quiero casarme contigo quiero vivir contigo quiero tener hijos contigo, lo quiero todo contigo, ahora estoy en mi casa jugando, tu estas en la tuya durmiendo y a mi me encanta jugar pero siento un vacio en el pecho que lo unico que quisiera ahora mismo es estar contigo abrazándote, dandonos besos, discutiendo, riendonos, de cualquier manera pero contigo de verdad que me haces muchisima falta🥺, ojala ya dentro de poco se pongan las cosas un poco más estables que empiece las practicas consiga un trabajo que me sirva para pasar los 3 meses y que te pueda ver todo lo posible y que pasen estos 3 meses rapidos porque van a ser un infierno para mi y para ti que seguramente estes menos ocupada igual, solo quiero que como se que lo vamos a pasar mal, intentar pasarlo lo menos mal posible hablar cuando podamos vernos cuando podamos y todo de la mejor manera posible porque como nos pongamos a estar discutiendo todos los dias va a ser muchisimo peor, nose amor que te amo muchisimo y que ahora mismo me gustaria un abrazo tuyo🥺 te amo gordita, eres el amor de mi vida🩵, buenos dias despues de la siesta veras luego para dormirte, un besito mivida, te dejo para acabar una adivinanza, 53 -‘9 ‘8 (94d- !9 ‘3 ;-@53/ !7!,- (4-,8-/ 094 /34 57 /83’043 @9 /34w-/`,
    7: `💙 Mes 7<br><br>Hola preciosa, hoy hacemos 7 meses,si me lo preguntaras te diria que han sido los 7 mejores meses de mi vida, de una manera muy simple y sencilla has cambiado mi vida por completo, nose ni en que momento han pasado 7 meses que es poquísimo y a la vez es muchisimo tiempo porque para mi fue ayer cuando estabamos en aquel parque conociendonos, y todos los momentos que hemos vivido, yo que soy una persona bastante simple que no suelo hacer nada del otro mundo y contigo he vivido miles de cosas diferentes, hemos viajado hemos ido a comer y cenar a mil sitios, al safari, al zoo, al parque de atracc…, a los bolos, a las maquinitas, a lo de dar vueltas, y muchas mas cosas que ahora no me acuerdo, gracias por darle un poco de alegria a mi vida aburrida jajajaj, eres el amor de mi vida gorda, me doy cuenta cada dia, por como me siento contigo, como de agusto estoy a tu lado, como siempre conseguimos que todo vaya bien, me doy cuenta al fijarme en todas las cosas que hago y que haria por ti que no lo haría por nadie en el mundo, y contigo las hago sin pestañear, por como me muestro contigo, como has conseguido que pueda ser tan yo, por como me apoyas siempre, como se que siempre estas ahi si te necesito y si no tambien, has estado al lado mia en momentos difíciles para mi y amor te lo juro que eres mi mayor apoyo, yo que no hablo con nadie no le cuento nada a nadie y jamas hablo de mis problemas, la unica persona que sabe algo de mi vida de si estoy mejor o peor eres tu, para el resto de gente yo siempre estoy bien, lo normal para mi vamos, me encanta hacerte feliz amor, que estes tan cómoda conmigo, que puedas ser tu, todas las cosas que haces por mi, te lo he dicho 100 veces pero el que siempre pienses en como me voy a sentir o que voy a pensar de las cosas lo valoro muchisimo, que confies en mi me hace muy feliz y estar tranquilo, yo necesito que no dudes de mi, y que lo sepas porque yo nunca en mi vida te voy a traicionar ni hacer daño de ninguna manera, y en estos siete meses creo que algo de cuenta te habras tenido que dar, y el tiempo te lo dira pero vamos ahora que ya me vas conociendo creo que vas teniendo claro que yo nunca te voy a poner los cuernos, pero ni tan siquera pensarlo, ni se me pasa por la cabeza, mivida, que eres la mujer mas perfecta que he conocido nunca, amo todo de ti, estoy completamente enamorado y lo digo y li juro y con orgullo de que sea de ti, que eres una persona que sin que suene egocentrico, pero que estas a mi altura, porque yo aunque sea un poco tonto, se lo que valgo, y se que no hay muchas personas ni como yo ni como tu, espero que siempre tengamos eso por delante porque no somos como la gente de hoy en dia, y estoy muy contento de haberte encontrado, que con 20 años haya conocido ya a la futura mujer de mis hijos, la mi media naranja, mi pareja de vida, amor quiero todo contigo, ojala que no te canses de mi nunca y que este amor siga creciendo durante muchos meses y años mas, gracias por se tu, gracias por siempre estar a mi lado, eres mi lugar seguro, eres la unica persona con la que puedo llorar y no sentirme mal ni juzgado, haces que mis dias grises tengan sol, y que nada importe cuando estas conmigo, que al final la mayoria de problemas son todo bobadas y todo esta en la cabeza, que todo tiene solución, hablando de nosotros creo que estamos en nuestro mejor momento en cuanto a la relación, casi no discutimos por no decir que no discutimos, no tenemos practicamente problemas, nose si es porque todo va muy bien, porque nos entendemos mejor, o porque algo va a reventar dentro de poco, ojala que eso no sea, que por cierto llevo sin exagerar como 2 semanas queriendo tener una charla contigo asi de nosotros mas seria pero de verdad que no ha habido ni un solo dia que estemos los dos chill tumbados sin que uno tenga que madrugar o que el otro este haciendo algo, a ver si un dia de estos la podemos tener, no es nada malo, solo hablar de nosotros, que hay que hacerlo y es mejor cuando todo va bien, quiero hablar un poco nose de como nos sentimos, de nuestros miedos, de si hay algo que hagamos que no nos gusta, cosas que se puedan mejorar, sobre todo eso para que no haya nada que no sepa el uno del otro que se quede dentro y un dia reviente y hablemos desde la ravia y el impulso, su puta madre vaya texto amor jajajajaj, menos mal que mañana no tienes nada que hacer y lo podras leer tranquila, he intentado que tenga sentido todo vale, nose si lo habre conseguido, y a lo que has dicho antes , si he vivido con la misma intensidad que tu estos ultimos 7 meses, estoy muy feliz de tenerte, me haces muy feliz, tengo metas y sueños contigo que ojala se cumplan algun dia, mi vida gracias por todo y que estos 7 meses no son nada de todo lo que nos queda, te amo con el corazon en la mano, besitos, y buenos dias🩵🩵🩵🩵`,
  };

  // ocultar menú
  menu.style.display = "none";

  // mostrar vista carta
  view.classList.remove("hidden");

  // animación suave
  box.style.opacity = "0";
  box.style.transform = "translateY(10px)";

  setTimeout(() => {
    box.innerHTML = letters[month] || "Sin contenido";

    box.style.opacity = "1";
    box.style.transform = "translateY(0)";
  }, 150);
};

/* ==================================================
   🔙 VOLVER AL MENÚ DE CARTAS
================================================== */

window.backToMenu = function () {
  const menu = document.getElementById("letters-menu");
  const view = document.getElementById("letter-view");

  if (!menu || !view) return;

  view.classList.add("hidden");
  menu.style.display = "block";
};

/* ==================================================
   🧠 SEGURIDAD: EVITAR BUGS DE SCROLL EN MODAL
================================================== */

window.addEventListener("resize", () => {
  const modalOpen = document.querySelector(".modal-bg.active");

  if (modalOpen) {
    document.body.style.overflow = "hidden";
  }
});
