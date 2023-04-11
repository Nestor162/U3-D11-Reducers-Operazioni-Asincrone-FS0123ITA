## Jobs Search Engine

Hai il compito di migliorare un progetto esistente, un motore di ricerca per offerte di lavoro in remoto.

➡️**Oggi il tuo compito è dividere i reducers e migliorare la pulizia del progetto.**

### TASKS: (continua da dove sei arrivato precedentemente)

- Riscrivi i tuoi action creator come abbiamo fatto in classe, scrivendoli in un file separato. Sostituisci ogni proprietà type scritta come semplice stringa con una costante.
- Crea due diversi reducer: uno continuerà a memorizzare i preferiti, mentre l’altro sarà riservato ad ospitare l’array dei risultati derivante dalla ricerca.
- Per riempire questa porzione del Redux Store, muovi l’operazione di fetch dentro un action creator “speciale” come abbiamo fatto questa mattina, in modo da dispatchare l’azione contenente i risultati solamente al termine dell’operazione asincrona.
- Mantieni intatto il resto delle funzionalità, e se non l’hai ancora fatto, fornisci all’utente la capacità di rimuovere un’azienda dalla lista dei preferiti.
