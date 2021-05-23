namespace Exercise2_5 {

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

}