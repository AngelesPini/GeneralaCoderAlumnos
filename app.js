let empezar= document.getElementById("empezar")
empezar.addEventListener("click", ()=>{
let conteo = [0, 0, 0, 0, 0, 0, 0];

    let fullGame = false;
    let pockerGame = false;
    let escaleraGame = false;
    let generalaGame = false;



    function full() {
        let encontro3 = false;
        let encontro2 = false;
        
        for (let i = 0; i < 6; i++) {
            if (conteo[i] >= 3) {
                encontro3 = true;
            } else if (conteo[i] >= 2) {
                encontro2 = true;
            }
        }
        if (encontro3 && encontro2) {
            fullGame = true;
            return 30;
        } else {
            return 0;
        }
    }

    function pocker() {
        let encontro4 = false;
        for (let i = 0; i < 6; i++) {
            if (conteo[i] == 4) {
                encontro4 = true;
            }
        }
        if (encontro4) {
            pockerGame = true;
            return 40;
        } else {
            return 0;
        }
    }

    function escalera() {
        let inicio = 0;
        let fin = 0;
        
        for (let i = 0; i < 6; i++) {
            if (conteo[i] != 0) {
                inicio = i;
                break;
            }
        }
        
        for (let i = inicio; i < 6; i++) {
            if (conteo[i] == 0) {
                fin = i - 1;
                break;
            }
            if (i == 5) {
                fin = i;
            }
        }
        
        if (fin - inicio == 4) {
            escaleraGame = true;
            return 50;
        }
        
        return 0;
    }


    function generala() {
        let encontro5 = false;
        for (let i = 0; i < 6; i++) {
            if (conteo[i] == 5) {
                encontro5 = true;
            }
        }
        if (encontro5) {
            console.log("generala");
            generalaGame = true;
            return 60;
        } else {
            return 0;
        }
    }


    function todoAl() {
        let puntosCoincidencias = 0;
        for (let i = 0; i < 6; i++) {
            if (conteo[i] > 1) {
                let puntos = (i + 1) * conteo[i];
                puntosCoincidencias += puntos;
                alert("todo al: " + (i+1) +", sus puntos: " + puntos)
            }

        }
        
        return puntosCoincidencias;
    }

    function jugarGenerala() {
        let letraD;

        while (true) {
            // let dados = [1, 2, 3, 4, 5, 6];
            letraD = prompt("\n\nPresione la letra 'D' para tirar los dados🎲🎲🎲🎲🎲\n o 'S' para salir");

            if (letraD.toLowerCase() === "d") {
                let numerosArrojados = [];
                let jugadaUser = 0;
                let numerosArrojadosStr = "\nsu turno🍀:\n";

                for (let i = 0; i < 5; i++) {
                    numerosArrojados[i] = Math.floor(Math.random() * 6) + 1;
                    numerosArrojadosStr += numerosArrojados[i] + " ";
                    conteo[numerosArrojados[i] - 1]++;
                }

                alert(numerosArrojadosStr);
                
                let jugadaFull = full();
                if (fullGame) {
                    jugadaUser = jugadaFull;
                    if (jugadaUser !== 0) {
                        alert("Full✅! sus puntos: " + jugadaUser);
                    }
                }
                let jugadaPocker = pocker();
                if (pockerGame) {
                    jugadaUser = jugadaPocker;
                    if (jugadaUser !== 0) {
                        alert("Poker! sus puntos: " + jugadaUser);
                    }
                }

                let jugadaEscalera = escalera();
                if (escaleraGame) {
                    jugadaUser = jugadaEscalera;
                    if (jugadaUser !== 0) {
                        alert("Escalera! sus puntos: " + jugadaUser);
                    }
                }

                let jugadaGenerala = generala();
                if (generalaGame) {
                    jugadaUser = jugadaGenerala;
                    if (jugadaUser !== 0) {
                        alert("Generala! sus puntos: " + jugadaUser);
                    }
                }
                let puntosCoincidencias = todoAl();
                jugadaUser += puntosCoincidencias;

                for (let i = 0; i < 6; i++) {
                    conteo[i] = 0;
                }

                let jugadaPc = 0;
                let jugadaComputadora = [];
                let jugadaComputadoraStr = "juega la PC🖥️\n";
                for (let i = 0; i < 5; i++) {
                    jugadaComputadora[i] = Math.floor(Math.random() * 6) + 1;
                    jugadaComputadoraStr += jugadaComputadora[i] + " ";
                    conteo[jugadaComputadora[i] - 1]++;
                }

                alert(jugadaComputadoraStr);
                
                jugadaFull = full();
                if (fullGame) {
                    jugadaPc = jugadaFull;
                    if (jugadaPc !== 0) {
                        alert("Full🪄! sus puntos: " + jugadaPc);
                    }
                }
                jugadaPocker = pocker();
                if (pockerGame) {
                    jugadaPc = jugadaPocker;
                    if (jugadaPc !== 0) {
                        alert("Poker🎊! sus puntos: " + jugadaPc);
                    }
                }

                jugadaEscalera = escalera();
                if (escaleraGame) {
                    jugadaPc = jugadaEscalera;
                    if (jugadaPc !== 0) {
                        alert("Escalera🎉! sus puntos: " + jugadaPc);
                    }
                }

                jugadaGenerala = generala();
                if (generalaGame) {
                    jugadaPc = jugadaGenerala;
                    if (jugadaPc !== 0) {
                        alert("Generala🥇! sus puntos: " + jugadaPc);
                    }
                }
                puntosCoincidencias = todoAl();
                jugadaPc += puntosCoincidencias;

                for (let i = 0; i < 6; i++) {
                    conteo[i] = 0;
                }


                if (jugadaPc > jugadaUser) {
                    alert("GANA LA PC!🤩");
                } else if (jugadaUser > jugadaPc) {
                    alert("USTED GANA!! 🥳");
                } else if (jugadaUser === jugadaPc) {
                    alert("EMPATE!!💡");
                } else {
                    alert("vuelva a intentar💡");
                }
            } else if (letraD.toLowerCase() === "s") {
                alert("Hasta pronto!! 💡")
                break;
            }
        }
    }

    jugarGenerala();
})
