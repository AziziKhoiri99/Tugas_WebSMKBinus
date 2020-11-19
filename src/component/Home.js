import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import * as Micon from '@material-ui/icons';
import Carousel from 'react-material-ui-carousel';
import MenuIcon from '@material-ui/icons/Menu';

class Home extends Component {
    render(){
        return (
            <div>
              <Mui.Container fixed>
                    <Mui.Grid container spacing={0}>
                    <Mui.Grid item xs={6}>
                        <br/>
                        <img src="/logo smk.jpg" style={{width: 130}}/>
                        <br/><br/>
                        <h1 style={{color: "blue", fontSize: 50, fontFamily: "Arial, Helvetica, sans-serif"}}>
                          Selamat Datang di SMK Bina Nusantara 
                        </h1>
                        <form>
                            <Mui.Button variant="outlined"><a href="https://binusasmg.sch.id/sejarah/">
                              <p style={{color: "black"}}>Sejarah</p></a></Mui.Button>
                            <br/><br/>
                            <Mui.Button variant="outlined"><a href="https://binusasmg.sch.id/guru/">
                              <p style={{color: "black"}}>Guru</p></a></Mui.Button>
                            <br/><br/>
                            <Mui.Button variant="outlined"><a href="https://binusasmg.sch.id/kepala-sekolah/">
                              <p style={{color: "black"}}>Kepala Sekolah</p></a></Mui.Button>
                            <br/><br/>
                            <Mui.Button variant="outlined"><a href="https://binusasmg.sch.id/tkj/">
                              <p style={{color: "black"}}>Tehnik Komputer Dan Jaringan</p></a></Mui.Button>
                            <br/><br/>
                            <Mui.Button variant="outlined"><a href="https://binusasmg.sch.id/akutansi/">
                              <p style={{color: "black"}}>Akuntansi</p></a></Mui.Button>
                            <br/><br/>
                            <Mui.Button variant="outlined"><a href="https://binusasmg.sch.id/tbsm/">
                              <p style={{color: "black"}}>Tehnik Mesin</p></a></Mui.Button>
                            <br/><br/>
                            <Mui.Button variant="outlined"><a href="https://binusasmg.sch.id/tata-busana/">
                              <p style={{color: "black"}}>Tata Busana</p></a></Mui.Button>
                            <br/><br/>
                            <Mui.Button variant="outlined"><a href="https://binusasmg.sch.id/kontak-kami/">
                             <p style={{color: "black"}}>Kontak Kami</p></a></Mui.Button>
                        </form>
                        <br/><br/>
                    </Mui.Grid>
                    <Mui.Grid item xs={6}>
                         <h4>
                            <Mui.Button style={{marginLeft: 350}}>Daftar Sekarang
                            </Mui.Button> 
                             <Mui.Button variant="outlined" color="primary" style={{float: "right", borderRadius: 50}}>
                                Login
                            </Mui.Button>
                         </h4>
                        <img src="https://static-exp1.licdn.com/sc/h/3m4tgpbdz7gbldapvl63mrnxz"/>
                    </Mui.Grid>
                </Mui.Grid>
                <Mui.AppBar position="static" color="white">
                    <Mui.Toolbar variant="dense">
                 <Mui.IconButton edge="start" color="inherit" aria-label="menu">
                 <MenuIcon />
                 </Mui.IconButton>
                 <img src="/logo smk.jpg" style={{width: 90}}/>
                        <h4 variant="h6" color="primary">
                         SMK Bina Nusantara
                        </h4>
                         <Mui.InputBase
                          style={{marginLeft: 800}}
                          placeholder="Search…"
                          inputProps={{ 'aria-label': 'search' }}
                        />
                    </Mui.Toolbar>
                </Mui.AppBar>
                <Carousel>
                    <img style={{width: 1400, height: 500}} src="/Yayasan-Bina-Nusantara.jpg"/>
                    <img style={{width: 1400, height: 500}} src="/maxresdefault.jpg" />
                    <img style={{width: 1400, height: 500}} src="/smk bina nusantara semarang.jpg"/>
                    <img style={{width: 1400, height: 500}} src="/download.jpeg"/>
                </Carousel>
                <hr/>
                <br/>
                <Mui.Container fixed>
                <Mui.Grid container spacing={0}>
                    <Mui.Grid item xs={6}>
                    <Mui.Card>
                       <Mui.CardActionArea>
                       <Mui.CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/images.jpeg"
          title="Contemplative Reptile"
        />
        <Mui.CardContent>
          <Mui.Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Mui.Typography>
          <Mui.Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Mui.Typography>
        </Mui.CardContent>
      </Mui.CardActionArea>
      <Mui.CardActions>
        <Mui.Button size="small" color="primary">
          Share
        </Mui.Button>
        <Mui.Button size="small" color="primary">
          Learn More
        </Mui.Button>
      </Mui.CardActions>
    </Mui.Card>
                    </Mui.Grid>
                    <Mui.Grid item xs={6}>                        
                    <Mui.Card>
      <Mui.CardActionArea>
        <Mui.CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://t1.gstatic.com/images?q=tbn:ANd9GcRhYs9gDzr9kty1WyKOa3J8lqrPtFX3wohngKWpym2v_KCYLwQzJFg5ZmRWSsGjdkCgD_8nCDxMU4_REM4LegP8sw"
          title="Contemplative Reptile"
        />
        <Mui.CardContent>
          <Mui.Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Mui.Typography>
          <Mui.Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Mui.Typography>
        </Mui.CardContent>
      </Mui.CardActionArea>
      <Mui.CardActions>
        <Mui.Button size="small" color="primary">
          Share
        </Mui.Button>
        <Mui.Button size="small" color="primary">
          Learn More
        </Mui.Button>
      </Mui.CardActions>
    </Mui.Card>
                     </Mui.Grid>
                </Mui.Grid>
                </Mui.Container>
                </Mui.Container>
            </div>
        )
    }
}

export default Home;