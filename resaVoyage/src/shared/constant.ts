// API Services

export const apiPrefix = 'http://localhost:9004';

/**** API Commande ****/
export const apiCommande = apiPrefix + '/commande';
export const apiCommandeById = apiPrefix + '/commande';
export const apiUpdateCommande = apiPrefix + '/commande';
export const apiSaveCommande = apiPrefix + '/commande';

/**** API User and Login ****/
export const apiLogin = apiPrefix + '/auth';
export const ROLE_ADMIN = 'ROLE_admin';
export const apiUserByusername = apiPrefix + '/utilisateur';
export const apiUserByuserid = apiPrefix + '/utilisateur';
export const apiSessionById = apiPrefix + '/aventure';

/**** API Aventure ****/
export const apiAventureBySession = apiPrefix + '/aventure';
export const apiAventureByCategory = apiPrefix + '/aventure';
export const apiAventure = apiPrefix + '/aventure';
export const apiAventureById = apiPrefix + '/aventure';


/**** API Category ****/
export const apiCategory = apiPrefix + '/category';
export const apiCategoryById = apiPrefix + '/category';


/**** API Paiement ****/
export const apiPayment = apiPrefix + '/paiement';

/**** API Commentaire ****/
export const apiCommentaire= apiPrefix + '/commentaire';
export const apiAddCommentaire= apiPrefix + '/commentaire/commentaire/save';





