export class Application {
    public timers: Timer[] = [];
    private _timeId: number = -1;
    private _fps: number = 0;
    public isFlipYCoord: boolean = false;

    public isSupportMouseMove: boolean;
    protected _isMouseDown: boolean;
    protected _start: boolean = false;
    protected _requestId: number = -1;

    protected _lastTime !: number;
    protected _startTime !: number;

    public frameCallback: (( app: Application) => void) | null;

    public constructor (canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this._isMouseDown = false;
        this.isSupportMouseMove = false;
        this.frameCallback = null;

        document.oncontextmenu = () => false;
    }
}