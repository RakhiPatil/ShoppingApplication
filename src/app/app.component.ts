import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShopieService } from './shopie.service';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,CartComponent, DashboardComponent, HomepageComponent, ProfileComponent,RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shopping';

  constructor(private ss:ShopieService){
    
   this.ss.myShopie().subscribe(res=>{
    console.log(res);
   })
     

  }
 
  
}
