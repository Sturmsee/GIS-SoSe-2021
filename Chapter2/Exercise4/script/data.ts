namespace Exercise2_4 {

    export interface AvatarPart {
        image: string;
        part: string;
    }

    export interface AllAvatarParts {
        faces: AvatarPart[];
        shirts: AvatarPart[];
        pants: AvatarPart[];
    }

    export interface Avatar {
    face: AvatarPart;
    shirt: AvatarPart;
    pant: AvatarPart;
    }

    export let allParts: AllAvatarParts = {
    faces: [
        {image: "../Exercise4/img/RedNoseBraidedHair.png", part: "RedNoise/BraidedHair"},
        {image: "../Exercise4/img/ShortNoseSpikedHair.png", part: "ShortNose/SpikedHair"},
        {image: "../Exercise4/img/StubbyNoseShortHair.png", part: "StubbyNose/ShortHair"},
        {image: "../Exercise4/img/NoNoseNoHair.png", part: "NoNose/NoHair"}
    ],
    shirts: [
        {image: "../Exercise4/img/LongSleeveRed.png", part: "LongSleeve/Red"},
        {image: "../Exercise4/img/LongSleeveGreen.png", part: "LongSleeve/Green"},
        {image: "../Exercise4/img/ShortSleeveBlack.png", part: "ShortSleeve/Black"},
        {image: "../Exercise4/img/ShortSleeveBlue.png", part: "ShortSleeve/Blue"}
    ],
    pants: [
        {image: "../Exercise4/img/JeansBlue.png", part: "Jeans/Blue"},
        {image: "../Exercise4/img/JeansBlack.png", part: "Jeans/Black"},
        {image: "../Exercise4/img/ShortsGreen.png", part: "Shorts/Green"},
        {image: "../Exercise4/img/ShortsBrown.png", part: "Shorts/Brown"}
    ]
    };
}