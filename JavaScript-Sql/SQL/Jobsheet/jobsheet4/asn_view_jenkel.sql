use sekolah;

create view vw_asn_jns_kelamin as
	select nis, nama,
		if (mid(nis, 7, 1) = '1',
			'laki-laki', 'perempuan') as jenKel
	from siswa;
    
    
    select * from sekolah.vw_asn_jns_kelamin;