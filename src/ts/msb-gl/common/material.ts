/**
 * Created by mm28969 on 12/26/16.
 */

import {ColorRGB} from "./color";

export class Material {

    static emerald(): Material {

        let material = new Material();

        material.ambient = new ColorRGB(0.0215, 0.1745, 0.0215);
        material.diffuse = new ColorRGB(0.07568, 0.61424, 0.07568);
        material.specular = new ColorRGB(0.633, 0.727811, 0.633);
        material.shininess = 0.6;

        return material;
    }

    static jade(): Material {

        let material = new Material();

        material.ambient = new ColorRGB(0.135, 0.2225, 0.1575);
        material.diffuse = new ColorRGB(0.54, 0.89, 0.63);
        material.specular = new ColorRGB(0.316228, 0.316228, 0.316228);
        material.shininess = 0.1;

        return material;
    }

    static obsidian(): Material {

        let material = new Material();

        material.ambient = new ColorRGB(0.05375, 0.05, 0.06625);
        material.diffuse = new ColorRGB(0.18275, 0.17, 0.22525);
        material.specular = new ColorRGB(0.332741, 0.328634, 0.346435);
        material.shininess = 0.3;

        return material;
    }

    static pearl(): Material {

        let material = new Material();

        material.ambient = new ColorRGB(0.25, 0.20725, 0.20725);
        material.diffuse = new ColorRGB(1.0, 0.829, 0.829);
        material.specular = new ColorRGB(0.296648, 0.296648, 0.296648);
        material.shininess = 0.088;

        return material;
    }

    static ruby(): Material {

        let material = new Material();

        material.ambient = new ColorRGB(0.1745, 0.01175, 0.01175);
        material.diffuse = new ColorRGB(0.61424, 0.04136, 0.04136);
        material.specular = new ColorRGB(0.727811, 0.626959, 0.626959);
        material.shininess = 0.6;

        return material;
    }

    static turquoise(): Material {

        let material = new Material();

        material.ambient = new ColorRGB(0.1, 0.18725, 0.1745);
        material.diffuse = new ColorRGB(0.396, 0.74151, 0.69102);
        material.specular = new ColorRGB(0.297254, 0.30829, 0.306678);
        material.shininess = 0.1;

        return material;
    }

    static brass(): Material {

        let material = new Material();

        material.ambient = new ColorRGB(0.329412, 0.223529, 0.027451);
        material.diffuse = new ColorRGB(0.780392, 0.568627, 0.113725);
        material.specular = new ColorRGB(0.992157, 0.941176, 0.807843);
        material.shininess = 0.21794872;

        return material;
    }

    static bronze(): Material {

        let material = new Material();

        material.ambient = new ColorRGB(0.2125, 0.1275, 0.054);
        material.diffuse = new ColorRGB(0.714, 0.4284, 0.18144);
        material.specular = new ColorRGB(0.393548, 0.271906, 0.166721);
        material.shininess = 0.2;

        return material;
    }

    static chrome(): Material {

        let material = new Material();

        material.ambient = new ColorRGB(0.25, 0.25, 0.25);
        material.diffuse = new ColorRGB(0.4, 0.4, 0.4);
        material.specular = new ColorRGB(0.774597, 0.774597, 0.774597);
        material.shininess = 0.6;

        return material;
    }

    static copper(): Material {

        let material = new Material();

        material.ambient = new ColorRGB(0.19125, 0.0735, 0.0225);
        material.diffuse = new ColorRGB(0.7038, 0.27048, 0.0828);
        material.specular = new ColorRGB(0.256777, 0.137622, 0.086014);
        material.shininess = 0.1;

        return material;
    }

    static gold(): Material {

        let material = new Material();

        material.ambient = new ColorRGB(0.24725, 0.1995, 0.0745);
        material.diffuse = new ColorRGB(0.75164, 0.60648, 0.22648);
        material.specular = new ColorRGB(0.628281, 0.555802, 0.366065);
        material.shininess = 0.4;

        return material;
    }

    static silver(): Material {

        let material = new Material();

        material.ambient = new ColorRGB(0.19225, 0.19225, 0.19225);
        material.diffuse = new ColorRGB(0.50754, 0.50754, 0.50754);
        material.specular = new ColorRGB(0.508273, 0.508273, 0.508273);
        material.shininess = 0.4;

        return material;
    }

    static plasticBlack(): Material {

        let material = new Material();

        material.ambient = new ColorRGB(0.0, 0.0, 0.0);
        material.diffuse = new ColorRGB(0.01, 0.01, 0.01);
        material.specular = new ColorRGB(0.50, 0.50, 0.50);
        material.shininess = 0.25;

        return material;
    }

    static plasticCyan(): Material {

        let material = new Material();

        material.ambient = new ColorRGB(0.0, 0.1, 0.06);
        material.diffuse = new ColorRGB(0.0, 0.50980392, 0.50980392);
        material.specular = new ColorRGB(0.50196078, 0.50196078, 0.50196078);
        material.shininess = 0.25;

        return material;
    }

    static plasticGreen(): Material {

        let material = new Material();

        material.ambient = new ColorRGB(0.0, 0.0, 0.0);
        material.diffuse = new ColorRGB(0.1, 0.35, 0.1);
        material.specular = new ColorRGB(0.45, 0.55, 0.45);
        material.shininess = 0.25;

        return material;
    }

    static plasticRed(): Material {

        let material = new Material();

        material.ambient = new ColorRGB(0.0, 0.0, 0.0);
        material.diffuse = new ColorRGB(0.5, 0.0, 0.0);
        material.specular = new ColorRGB(0.7, 0.6, 0.6);
        material.shininess = 0.25;

        return material;
    }

    ambient: ColorRGB;
    diffuse: ColorRGB;
    specular: ColorRGB;
    shininess: number;

    constructor() {

    }
}