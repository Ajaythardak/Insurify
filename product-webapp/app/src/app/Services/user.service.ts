import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  email1 = localStorage.getItem('logInEmailId')?.toString();

  // baseurl: any = "http://localhost:8080/user/api/v1/";
<<<<<<< HEAD
<<<<<<< HEAD
  baseurl='http://localhost:8080/user/api/v1/'
=======
  baseurl = 'http://localhost:8080/user/api/v1/'
>>>>>>> 0e564c3d9f7d0f2ebfc13cd801be91711926476b
=======
  baseurl = 'http://localhost:8080/user/api/v1/'
>>>>>>> 0e564c3d9f7d0f2ebfc13cd801be91711926476b
  getUserDetails(): Observable<any> {
    return this.http.get(this.baseurl + "users");
  }

  updateUserDetails(file: File, info: string): Observable<any> {
    const formData = new FormData();
    formData.append("userDetails", info);
    formData.append("imageFile", file);
    return this.http.put(this.baseurl + "updateUser/" + localStorage.getItem('logInEmailId'), formData);
  }

  updateDetails(info: any): Observable<any> {
    return this.http.put<User>(this.baseurl + "updateUserDetails/" + localStorage.getItem('logInEmailId'), info);
  }


  // baseUrl = "http://localhost:8080/user/api/v1/user";
  // baseUrl1 = "http://localhost:8080/user/api/v1";
<<<<<<< HEAD
<<<<<<< HEAD
  baseUrl='http://localhost:8080/'
=======
  baseUrl = 'http://localhost:8080/'
>>>>>>> 0e564c3d9f7d0f2ebfc13cd801be91711926476b
=======
  baseUrl = 'http://localhost:8080/'
>>>>>>> 0e564c3d9f7d0f2ebfc13cd801be91711926476b
  // baseUrl1='http://localhost:8080/user/api/v1'

  registerUser(user: User): Observable<Object> {
    console.log(user);
    return this.http.post("http://localhost:8080/user/api/v1/user", user);
    // return this.http.post(this.baseUrl + "user/api/v1/user", user);
  }

  postUserId(s1: string): Observable<any> {
    return this.http.post(this.baseUrl + "chat/api/userId", s1);

  }

  postAdvisorId(s1: string): Observable<any> {
    return this.http.post(this.baseUrl + "chat/api/advisorId", s1);
  }

  getMsgs(chatRoom: string): Observable<any> {
    return this.http.get(this.baseUrl + "chat/api/msg/" + chatRoom);
  }

  registerChatRoom(msg: any): Observable<any> {
    return this.http.post(this.baseUrl + "chat/api/register/chatroom", msg)
  }

  updateMsgList(chatMsg: any, chatRoom: string): Observable<any> {
    return this.http.put(this.baseUrl + "chat/api/update/msg/" + chatRoom, chatMsg)
  }

  getNames(id: any): Observable<any> {
    return this.http.get(this.baseUrl + "chat/api/names/" + id)
  }

}
