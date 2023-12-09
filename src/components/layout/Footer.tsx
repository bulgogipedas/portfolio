export default function Footer() {
  return (
    <div className="py-10 w-full justify-center items-center text-center text-white mx-auto">
      <h2 className="text-[48px] font-bold">Elsewhere</h2>
      <ul className="font-medium flex flex-row gap-10 justify-center text-[20px] pt-2">
        <a href="https://medium.com/@rapli.np" target="blank" ><li>Medium</li></a>
        <a href="https://github.com/bulgogipedas" target="blank"><li>Github</li></a>
        <a href="https://www.kaggle.com/sateasinpedas/Home" target="blank" ><li>Kaggle</li></a>
        <a href="https://www.linkedin.com/in/rafliardiansyah/" target="blank" ><li>Linkedin</li></a>
        <a href="https://bit.ly/rafli-portfolio-notion-site" target="blank" ><li>Portfolio Notion</li></a>
      </ul>

      <p className="pt-4">@2023 Rafli Ardiansyah • Bandung </p>
    </div>
  );
}
