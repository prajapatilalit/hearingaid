export const scrollComponent = (currentCom) => {
    const element = document.getElementById(currentCom);
    console.log(currentCom,"current")
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', inline: "nearest", block:"start", });
    }
}