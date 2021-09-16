import { GLProgram, GLTexture2D } from './ICamera';
export class CameraApplication {
    colorProgram: GLProgram;
    textureProgram: GLProgram;

    currTexIdx: number;

    textures: GLTexture2D[];
    cube: Cube;
    cubeVAO: GLStaticMesh;

    cubeAngle: number;
    cubeSpeed: number;
    cubeMatrix: mat4;

    triAngle: number;
    triSpeed: number;
    triTimerId: number;

    triMatrix: mat4;
    private _hitAxis: EAxisType;

    public constructor(canvas: HTMLCanvasElement) {
        this.cubeAngle = 0;
        this.triAngle = 0;
        this.cubeSpeed = 100;
        this.triSpeed = 1;
        this.triTimerId = -1;
        this.currTexIdx = 0;
        this.textures = [];

        this.textures.push(GLTextureCache.instance.getMust("default"));

        this.textureProgram = GLProgramCache.instance.getMust("texture");
        this.colorProgram = GLProgramCache.instance.getMust("color");

        this.cube = new Cube(0.5, 0.5, 0.5);

        let data: GeometryData = this.cube.makeGeometryData();
        this.cubeVAO = data.makeStaticVAO(this.gl);
        this._hitAxis = EAxisType.NODE;

        this.cubeMatrix = new mat4();
        this.triMatrix = new mat4();

        this.camera.z = 8;
    }
}