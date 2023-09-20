export default function EvolutionChart({ evo: { start } }) {
    // needs a starting point
    return (
        <div className="col-flex">
            {start && <PokemonCard pokemon={start}/>}
            {start.how && <div>{start.how}</div>}
            {start.next && <PokemonCard pokemon={start.next} />}
            {start.next.how && <div>{start.next.how}</div>}
            {start.next.next && <PokemonCard pokemon={start.next.next} />}
        </div>
    );
}

const PokemonCard = ({ pokemon }) => {
    <div className="col-flex">
        <div>
            <Image source={`something/${pokemon.id}`} />
        </div>
        <div>{pokemon.id}</div>
        <div>{pokemon.name}</div>
        <div>{pokemon.type.one}</div>
        <div>{pokemon.type?.two}</div>
    </div>;
};
