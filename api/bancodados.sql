use barbearia;

create table tb_barbeiro (
id_barbeiro int primary key auto_increment,
nm_barbeiro varchar(100),
ds_email varchar(100),
ds_telefone varchar(100),
ds_senha varchar(100)
);

create table tb_cliente (
id_cliente int primary key auto_increment,
nm_cliente varchar(100),
ds_email varchar(100),
ds_telefone varchar(100),
ds_senha varchar(100)
);

create table tb_agendamento (
id_agendamento int primary key auto_increment,
dt_agendamento datetime,
tp_corte varchar(100),
id_cliente int,
foreign key (id_cliente) references tb_cliente (id_cliente),
id_barbeiro int,
foreign key (id_barbeiro) references tb_barbeiro (id_barbeiro)
);

insert into tb_barbeiro (nm_barbeiro, ds_email, ds_telefone, ds_senha)
				values('Adrian James', 'adrian@greenfield.com', '1187564389', '31-03-07');

insert into tb_barbeiro (nm_barbeiro, ds_email, ds_telefone, ds_senha)
				values('Matheus Ferreira', 'matheusferreira@greenfield.com', '1178546732', 'admin@greenfield');
                
select * from tb_barbeiro;