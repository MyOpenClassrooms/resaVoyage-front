import { Session } from "./session";

export class Commande {
    id: number;
    userId: number;
    sessionId : number;
    date: Date;
    status: Boolean;

    constructor($id?: number,$userId?: number, $sessionid?: number, $dateCommande?: Date, $status?: Boolean){
      this.id = $id;
      this.userId = $userId;
      this.sessionId = $sessionid;
      this.date = $dateCommande;
      this.status = $status;
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