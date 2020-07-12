import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';
import { argsToArgsConfig } from 'graphql/type/definition';


const query: IResolvers = {
    Query: {
        estudiantes(): any {
            return database.estudiantes;
        },
        estudiante(__: void, { id }): any {
            const resultado = database.estudiantes.filter(estudiante => estudiante.id === id) [0];
            if (resultado === undefined){
                return {
                    id: '-1',
                    name: `Student not found with the ID ${id}`,
                    email: '',
                    courses: []
                }
            }
            return resultado; 
        },
        cursos(): any {
            return database.cursos;
        },
        curso(__: void, { curso }): any {
            const resultado = database.cursos.filter(curso_ => curso_.id === curso) [0];
            if (resultado === undefined){
                return {
                    id: '-1',
                    title: `Course not found with the ID ${curso}`,
                    description: '',
                    clases: -1,
                    time: 0.0,
                    logo: '',
                    level: 'TODOS',
                    path: '',
                    teacher: '',
                    reviews: []
                }
            }
            return resultado; 
        }
    }
}

export default query;