import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'  
})
export class ComponentInteractionService{
    private signupComonentData:any;
    private isShowProfile!: boolean;
    private isShowHome!: boolean;

    public setSignupComponentData(data: any):void{
        this.signupComonentData = data;
    }
    public getSignupComponentData():any{
      return this.signupComonentData;
    }

    public setisShowProfile(data:boolean):void{
        this.isShowProfile = data;
    }
    public getIsShowProfile():boolean{
        return this.isShowProfile;
    }

    public setIsShowHome(data:boolean):void{
        this.isShowHome = data;
    }
    public getIsShowHome():boolean{
        return this.isShowHome;
    }
}


