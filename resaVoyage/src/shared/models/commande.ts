import { Session } from "./session";

export class Commande {
    id: number;
    userId: number;
    session : Session;
    sessionId : number;
    date: Date;
    status: Boolean;

    constructor($id?: number,$userId?: number,$session?: Session, $sessionid?: number, $dateCommande?: Date, $status?: Boolean){
      this.id = $id;
      this.userId = $userId;
      this.session = $session;
      this.sessionId = $sessionid;
      this.date = $dateCommande;
      this.status = $status;
    }

    public get getSession(): Session {
        return this.session;
    }
    public set setSession(session: Session) {
        this.session = session;
    }
/* 
    public set session(session : Session) {
        this._session = session;
    }

    public getSession():Session {
        return this.session;
    }
  
     */
 }