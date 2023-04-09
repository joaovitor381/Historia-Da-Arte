import "./App.css";
import Card from "./components/Card";

function App() {
  const urlMedusa =
    "https://i.pinimg.com/originals/20/fa/0b/20fa0b4b8d0150e766baf8e40cf6d6c2.jpg";

  const urlDanteeVergil =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/William_Bouguereau_-_Dante_and_Virgile_-_Google_Art_Project_2.jpg/1200px-William_Bouguereau_-_Dante_and_Virgile_-_Google_Art_Project_2.jpg";

  const urlJovemBaco =
    "https://i0.wp.com/virusdaarte.net/wp-content/uploads/2013/04/baco.jpg";

  const urlJudite =
    "https://upload.wikimedia.org/wikipedia/commons/7/7a/Gentileschi_judith1.jpg";

  const urlCleopatra =
    "https://upload.wikimedia.org/wikipedia/commons/e/ee/Guido_Reni_-_Tod_der_Kleopatra_Potsdam_Sanssouci.jpg";

  const urlMonalisa =
    "https://cdn.culturagenial.com/imagens/mona-lisa-1-cke.jpg";

  const urlCaveiradoVanGogh =
    "https://santhatela.com.br/wp-content/uploads/2017/06/van-gogh-caveira-d.jpg";

  const urlJamesMirror =
    "https://obraseartesblog.files.wordpress.com/2016/06/201312_magritte_03.jpg";

  const urlGreenApple =
    "https://1.bp.blogspot.com/-bZHpJBjr_MI/V2CA4dNfwrI/AAAAAAAAb2U/ndXodGnWv3ETy2C27DAhOUUB4LY5GHf7gCLcB/s640/Ren%25C3%25A9%2BMagritte%2B%25E2%2580%2593%2BO%2BFilho%2Bdo%2BHomem%252C%2B1946.jpg";

  const urlOGrito =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpg/1200px-Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpg";

  return (
    <div className="App">
      <Card titulo="Cabeça Medusa (1597)" imagem={urlMedusa} width={500} />
      <Card
        titulo="La réproduction interdite (1937)"
        imagem={urlJamesMirror}
        width={500}
      />
      <Card
        titulo="Caveira com Cigarro Aceso (1885)"
        imagem={urlCaveiradoVanGogh}
        width={500}
      />
      <Card
        titulo="Dante e Vergil no inferno (1850)"
        imagem={urlDanteeVergil}
        width={500}
      />
      <Card titulo="O Jovem Baco (1595)" imagem={urlJovemBaco} width={500} />
      <Card
        titulo="Judite e sua criada (1613)"
        imagem={urlJudite}
        width={500}
      />
      <Card titulo="Cleopatra (1640)" imagem={urlCleopatra} width={500} />
      <Card titulo="Monalisa (1503)" imagem={urlMonalisa} width={500} />
      <Card
        titulo="O filho do Homem (1964)"
        imagem={urlGreenApple}
        width={500}
      />
      <Card titulo="O Grito (1893)" imagem={urlOGrito} width={500} />
    </div>
  );
}

export default App;
