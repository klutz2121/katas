var key = 'PASSWORD'
var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

var c = new VigenèreAutokeyCipher(key, abc)
Test.assertEquals(c.encode('AAAAAAAAPASSWORDAAAAAAAA'), 'PASSWORDPASSWORDPASSWORD')
Test.assertEquals(c.decode('PASSWORDPASSWORDPASSWORD'), 'AAAAAAAAPASSWORDAAAAAAAA')

Test.assertEquals(c.encode('CODEWARS'), 'ROVWSOIV')
Test.assertEquals(c.decode('LAXXHSJ'), 'WAFFLES')

Test.assertEquals(
  c.encode('AMAZINGLY FEW DISCOTHEQUES PROVIDE JUKEBOXES'),
  'PMSREBXOY REV LVYNMYLATCWU DKVZYXI BJBSWWAIB'
)

Test.assertEquals(
  c.decode('PMSREBXOY REV LVYNMYLATCWU DKVZYXI BJBSWWAIB'),
  'AMAZINGLY FEW DISCOTHEQUES PROVIDE JUKEBOXES'
)