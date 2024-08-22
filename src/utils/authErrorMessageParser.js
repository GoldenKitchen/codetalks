export default function(errorCode){
    switch (errorCode) {
        case 'auth/invalid-email':
            return 'Geçersiz email';
        case 'auth/email-already-exists':
            return 'Kullanıcı zaten kayıtlı';
        case 'auth/user-not-found':
            return 'Kullanıcı bulunamadı';
        case 'auth/weak-password':
            return 'Parola zayıf';
        default:
            return errorCode;
    }
}