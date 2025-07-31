import absImage from "./assets/image/abs.png";
import caceiteImage from "./assets/image/caceite.png";
import ccruceroImage from "./assets/image/ccrucero.png";
import deslizarseImage from "./assets/image/deslizarse.png";
import motorImage from "./assets/image/motor.png";
import fmanoImage from "./assets/image/fmano.png"
import gasolineraImage from "./assets/image/gasolinera.png"
import rmotorImage from "./assets/image/rmotor.png"


export const CORE_CONCEPTS = [
  {
    imagenPath: absImage,
    title: "Sistema ABS (Antilock Braking System)",
    description:
      "Indica un problema con el sistema antibloqueo de frenos. El auto aún puede frenar, pero sin la ayuda del ABS.",
  },
  {
    imagenPath: caceiteImage,
    title: "Poco Aceite",
    description:
      "Señala que el nivel de aceite del motor está bajo o hay baja presión de aceite. Es importante revisarlo de inmediato.",
  },
  {
    imagenPath: ccruceroImage,
    title: "Modo Crucero (Cruise Control)",
    description:
      "Indica que el control de velocidad crucero está activado y mantiene la velocidad sin necesidad de acelerar manualmente.",
  },
  {
    imagenPath: deslizarseImage,
    title: "Deslizarse (Control de Tracción o Pérdida de Adherencia)",
    description:
      "Advierte que el vehículo puede estar perdiendo tracción. Suele encenderse en caminos resbaladizos.",
  },

  {
    imagenPath: motorImage,
    title: "Motor (Check Engine)",
    description:
      "Señala un problema en el sistema del motor o emisiones. Puede ser desde algo menor hasta algo grave.",
  },

  {
    imagenPath: fmanoImage,
    title: "Freno de Mano (o freno de estacionamiento)",
    description:
      "Indica que el freno de mano está activado. Si sigue encendido al soltarlo, puede haber un fallo en el sistema de frenos.",
  },

  {
    imagenPath: gasolineraImage,
    title: "Tanque de Gasolina",
    description:
      "Avisa que el nivel de combustible está bajo y necesitas recargar pronto.",
  },

  {
    imagenPath: rmotorImage,
    title: "Refrigerante del Motor",
    description:
      "Indica que el motor puede estar sobrecalentándose o que el nivel de refrigerante está bajo.",
  },


];
