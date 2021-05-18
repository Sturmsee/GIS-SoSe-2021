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
        {image: "#", part: "LongSleeve/Red"},
        {image: "#", part: "LongSleeve/Green"},
        {image: "#", part: "ShortSleeve/Black"},
        {image: "#", part: "ShortSleeve/Blue"}
    ],
    pants: [
        {image: "#", part: "Jeans/Blue"},
        {image: "#", part: "Jeans/Black"},
        {image: "#", part: "Shorts/Green"},
        {image: "#", part: "Shorts/Brown"}
    ]
    };
}