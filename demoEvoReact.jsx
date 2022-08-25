export default function EvolutionChart({ evo: { start } }){
    // needs a starting point
    return (
        <div>
            {/* FIRST FORM
                Note: This list has to exsist if the pokemon can evolve.
                A pokemon that cannot evolve would not have an evolution object, plain and simple.
                other option beside start would be, altForm, and altForm2 until other wise known of more.
            */}
                {/* START >*/}
            <div>
                {/* Pokemon Image*/}
                <h2>'insert pokemon name here'</h2>
                <div>{start.id}</div>
                {/* Pokemon typing */}
            </div>
                {/* HOW */}
            <div>
                <h3>{start.how}</h3>
            </div>
                {/* NEXT */}
            <div>
                {/* Pokemon Image*/}
                <h2>'insert pokemon name here'</h2>
                <div>{start.next.id}</div>
                {/* Pokemon typing */}
            </div>
            {/* IF ANOTHER NEXT EXSISTS ELSE CHECK FOR MULTIPLE eg:pikachu*/}
            {start.next.next ? (
                <>
                </>
            ): start.next.multiple ? (
                <>
                </>
            ) : null}


            {/* ALT FORM IF EXSISTS */}
            {evo?.altForm &&
                <>
                    <div>
                        {/* Pokemon Image*/}
                        <h2>{altForm.form} 'insert pokemon name here'</h2>
                        <div>{altForm.id}</div>
                        {/* Pokemon typing */}
                    </div>
                    <div>
                        {/* How to */}
                        <h3>{altForm.how}</h3>
                    </div>
                    <div>
                        {/* Pokemon Image*/}
                        <h2>{altForm.next.form} 'insert pokemon name here'</h2>
                        <div>{altForm.next.id}</div>
                        {/* Pokemon typing */}
                    </div>
                    {altForm?.next?.next && 
                        <>
                            <div>
                                {/* How to */}
                                <h3>{altForm.next.how}</h3>
                            </div>
                            <div>
                                {/* Pokemon Image*/}
                                <h2>{altForm.next.next.form} 'insert pokemon name here'</h2>
                                <div>{altForm.next.next.id}</div>
                                {/* Pokemon typing */}
                            </div>
                        </>}
                </>
            }
        </div>
    )
}