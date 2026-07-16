import validateEntries from '../../genericFunctions/schemaValidation.mjs';
import evolutionIdListSchema from './evolution-id-schema.json' with { type: 'json' };
import evolutionIdList from './evolution-id-list-NEW.json' with { type: 'json' };

validateEntries(evolutionIdListSchema, evolutionIdList);