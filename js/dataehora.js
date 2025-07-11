function mostraDataOra() {
    /**
     * Represents the current date and time.
     */
    let adesso = new Date();

    
    /**
     * The current day of the month (1-31) extracted from the Date object `adesso`.
     */
    let giorno = adesso.getDate(); 
    /**
     * Stores the full name of the current weekday in Portuguese (Portugal) locale.
     */
    let nomeGiorno = adesso.toLocaleDateString('pt-PT', { weekday: 'long' });
    /**
     * Stores the full name of the current month in Portuguese (Portugal) locale."
     */
    let nomeMese = adesso.toLocaleDateString('pt-PT', { month: 'long' }); 
    /**
     * The current year extracted from the Date object `adesso`.
     */
    let anno = adesso.getFullYear();
    /**
     * Stores the current hour (0-23) extracted from the Date object `adesso`.
     */
    let ore = adesso.getHours();
    /**
     * The current minute (0-59) extracted from the Date object `adesso`.
     * @type {number}
     */
    let minuti = adesso.getMinutes();
    
    
    /**
     * Formats the given day number as a two-digit string.
     * If the day (giorno) is less than 10, it prepends a '0'.
     */
    let giornoFormatted = giorno < 10 ? '0' + giorno : giorno;
    /**
     * A string representing the hour value, padded with a leading zero if less than 10.
     */
    let oreFormatted = ore < 10 ? '0' + ore : ore;
    /**
     * Formats the given minutes value as a two-digit string.
     */
    let minutiFormatted = minuti < 10 ? '0' + minuti : minuti;
    return `Hoje é: ${nomeGiorno}, ${giornoFormatted} de ${nomeMese} de ${anno}, e são: ${oreFormatted}:${minutiFormatted} horas.`;
    }

    let datafinale = mostraDataOra();// Call the function to get the formatted date and time
    document.getElementById('data-ora').innerHTML = datafinale;// Display the formatted date and time in the HTML element with id 'data-ora'

    console.log(datafinale);
